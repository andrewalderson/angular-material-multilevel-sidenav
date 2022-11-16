import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationRailComponent } from "./navigation-rail.component";
import {
  NavigationRailItemComponent,
  NavigationRailItemIconDirective,
  NavigationRailItemLabelDirective,
} from "./navigation-rail-item.component";

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
