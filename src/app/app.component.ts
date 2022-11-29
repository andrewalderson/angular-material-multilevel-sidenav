import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from "@angular/animations";
import { filter, shareReplay, Subject, takeUntil } from "rxjs";
import { navigation, NavigationItem } from "./navigation.data";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";
import { select, Store } from "@ngrx/store";
import * as fromLayout from "./state";
import * as LayoutActions from "./state/layout.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("booleanFadeInOut", [
      state("true", style({ opacity: 1 })),
      state("false", style({ opacity: 0 })),
      transition("true <=> false", animate("225ms cubic-bezier(.2,0,0,1)")),
    ]),
    trigger("fadeInOutNavItem", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("200ms 200ms linear", style({ opacity: 1 })),
      ]),
      transition(":leave", [
        animate("100ms cubic-bezier(.2,0,0,1)", style({ opacity: 0 })),
      ]),
    ]),
    trigger("fadeInOutTopLevel", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "translateX(-10px)",
        }),
        animate(
          "200ms 200ms linear",
          style({ opacity: 1, transform: "translateX(0)" })
        ),
      ]),
      transition(":leave", [
        animate(
          "100ms cubic-bezier(.2,0,0,1)",
          style({
            opacity: 0,
            transform: "translateX(-10px)",
          })
        ),
      ]),
    ]),
    trigger("fadeInOutSubsection", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "translateX(10px)",
        }),
        animate(
          "200ms 200ms linear",
          style({
            opacity: 1,
            transform: "translateX(0)",
          })
        ),
      ]),
      transition(":leave", [
        animate(
          "100ms cubic-bezier(.2,0,0,1)",
          style({
            opacity: 0,
            transform: "translateX(10px)",
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  isSmallScreen$ = this.store.pipe(
    select(fromLayout.selectIsSmallScreen),
    shareReplay()
  );

  showSideNav$ = this.store.pipe(
    select(fromLayout.selectShowSidenav),
    shareReplay()
  );

  currentSection?: NavigationItem | null;

  isTopLevelContent = true;

  get navigation() {
    return navigation;
  }

  private _destroyed = new Subject<void>();

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((e): e is RouterEvent => e instanceof NavigationEnd),
        takeUntil(this._destroyed)
      )
      .subscribe(() => {
        this.closeNavigationDrawer();

        const parts = this.router.url.split("/");
        (this.isTopLevelContent = !(parts.length > 2)),
          (this.currentSection = this.navigation.find(
            (item: NavigationItem) =>
              item.link ===
              (item.link.startsWith("/") ? `/${parts[1]}` : parts[1])
          ));
      });
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  openNavigationDrawer(item: any) {
    this.currentSection = item;

    if (item.children?.length > 0) {
      this.store.dispatch(LayoutActions.openSidenav());
    } else {
      this.closeNavigationDrawer();
    }
  }

  closeNavigationDrawer() {
    this.store.dispatch(LayoutActions.closeSidenav());
  }

  toggleNavigationDrawer() {
    this.store.dispatch(LayoutActions.toggleSidenav());
  }

  forward(item: any) {
    this.isTopLevelContent = false;
    this.currentSection = item;
  }

  back() {
    this.currentSection = null;
    this.isTopLevelContent = true;
  }

  isLinkActive(link: string, exact: boolean = false) {
    return this.router.isActive(link, exact);
  }
}
