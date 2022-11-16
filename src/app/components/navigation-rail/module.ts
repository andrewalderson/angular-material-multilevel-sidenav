import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NavigationRail,
  NavigationRailItem,
  NavigationRailItemIcon,
  NavigationRailItemLabel,
} from "./navigation-rail";

@NgModule({
  declarations: [
    NavigationRail,
    NavigationRailItem,
    NavigationRailItemIcon,
    NavigationRailItemLabel,
  ],
  imports: [CommonModule],
  exports: [
    NavigationRail,
    NavigationRailItem,
    NavigationRailItemIcon,
    NavigationRailItemLabel,
  ],
})
export class NavigationRailModule {}
