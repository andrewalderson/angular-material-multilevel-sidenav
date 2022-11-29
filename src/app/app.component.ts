import { Component, OnDestroy } from "@angular/core";
import { trigger, style, transition, animate } from "@angular/animations";
import { Subject, filter, take, shareReplay } from "rxjs";
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
    trigger("fadeInOut", [
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
export class AppComponent {
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

  constructor(private router: Router, private store: Store) {
    this.router.events
      .pipe(
        filter((e): e is RouterEvent => e instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
        const parts = this.router.url.split("/");
        (this.isTopLevelContent = !(parts.length > 2)),
          (this.currentSection = this.navigation.find(
            (item: NavigationItem) =>
              item.link ===
              (item.link.startsWith("/") ? `/${parts[1]}` : parts[1])
          ));
      });
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
