import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRailComponent } from './navigation-rail.component';
import { NavigationRailItemComponent } from './navigation-rail-item.component';



@NgModule({
  declarations: [
    NavigationRailComponent,
    NavigationRailItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationRailComponent,
    NavigationRailItemComponent
  ]
})
export class NavigationRailModule { }
