import { Component, OnDestroy } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Subject, takeUntil, map, filter, take } from "rxjs";
import { navigation, NavigationItem } from "./navigation.data";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("accordionIndicatorRotate", [
      state("collapsed, void", style({ transform: "rotate(0deg)" })),
      state("expanded", style({ transform: "rotate(180deg)" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")
      ),
    ]),
    trigger("accordionExpansion", [
      // don't transition the 'void' state as it causes elements to flash on screen
      // we are relying on the fact that the animation state is always set
      state("collapsed, void", style({ height: "0px", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", [
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)"),
      ]),
    ]),
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
export class AppComponent implements OnDestroy {
  private _destroyed = new Subject<void>();

  get isSmallScreen() {
    return this._isSmallScreen;
  }
  private _isSmallScreen = false;

  isOpened = false;

  currentSection: any;

  currentItem?: NavigationItem;

  isTopLevelContent = true;

  get navigation() {
    return navigation;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        takeUntil(this._destroyed),
        map((result) => {
          this._isSmallScreen = result.matches;
        })
      )
      .subscribe();

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

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  openNavigationDrawer(item: any, event: Event) {
    this.currentSection = item;
    this.isOpened = this.currentSection.children?.length > 0;
  }

  closeNavigationDrawer(event: Event) {
    this.isOpened = false;
  }

  forward(item: any, event: Event) {
    this.isTopLevelContent = false;
    this.currentSection = item;
  }

  back(event: Event) {
    this.currentSection = null;
    this.isTopLevelContent = true;
  }

  isLinkActive(link: string, exact: boolean = false) {
    return this.router.isActive(link, exact);
  }

  isChildLinkActive(children: NavigationItem[], exact: boolean = false) {
    for (let item of children) {
      if (this.isLinkActive(item.link, exact)) {
        return true;
      }
    }
    return false;
  }
}
