import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatNavigationRail,
  MatNavigationRailItem,
  MatNavigationRailItemIcon,
  MatNavigationRailItemLabel,
} from "./navigation-rail";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
  declarations: [
    MatNavigationRail,
    MatNavigationRailItem,
    MatNavigationRailItemIcon,
    MatNavigationRailItemLabel,
  ],
  imports: [CommonModule, MatRippleModule],
  exports: [
    MatNavigationRail,
    MatNavigationRailItem,
    MatNavigationRailItemIcon,
    MatNavigationRailItemLabel,
  ],
})
export class MatNavigationRailModule {}
