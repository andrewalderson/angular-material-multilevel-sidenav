import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationItem } from "../navigation.data";

@Component({
  selector: "app-drawer-navigation-item",
  templateUrl: "./drawer-navigation-item.component.html",
  styleUrls: ["./drawer-navigation-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("indicatorRotate", [
      state("collapsed, void", style({ transform: "rotate(0deg)" })),
      state("expanded", style({ transform: "rotate(180deg)" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")
      ),
    ]),
    trigger("bodyExpansion", [
      // don't transition the 'void' state as it causes elements to flash on screen
      // we are relying on the fact that the animation state is always set
      state("collapsed, void", style({ height: "0px", visibility: "hidden" })),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition("expanded <=> collapsed", [
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)"),
      ]),
    ]),
  ],
})
export class DrawerNavigationItemComponent {
  @Input()
  navigationItem?: NavigationItem;

  constructor(private router: Router) {}

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
