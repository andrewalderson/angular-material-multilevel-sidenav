import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatNavigationRail,
  MatNavigationRailItem,
  MatNavigationRailItemIcon,
  MatNavigationRailItemLabel,
} from "./navigation-rail";

@NgModule({
  declarations: [
    MatNavigationRail,
    MatNavigationRailItem,
    MatNavigationRailItemIcon,
    MatNavigationRailItemLabel,
  ],
  imports: [CommonModule],
  exports: [
    MatNavigationRail,
    MatNavigationRailItem,
    MatNavigationRailItemIcon,
    MatNavigationRailItemLabel,
  ],
})
export class MatNavigationRailModule {}
