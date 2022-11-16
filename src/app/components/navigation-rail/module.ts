import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NavigationRailComponent,
  NavigationRailItemComponent,
  NavigationRailItemIconDirective,
  NavigationRailItemLabelDirective,
} from "./navigation-rail";

@NgModule({
  declarations: [
    NavigationRailComponent,
    NavigationRailItemComponent,
    NavigationRailItemIconDirective,
    NavigationRailItemLabelDirective,
  ],
  imports: [CommonModule],
  exports: [
    NavigationRailComponent,
    NavigationRailItemComponent,
    NavigationRailItemIconDirective,
    NavigationRailItemLabelDirective,
  ],
})
export class NavigationRailModule {}
