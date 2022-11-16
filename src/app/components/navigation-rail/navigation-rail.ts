import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ViewEncapsulation,
} from "@angular/core";

@Directive({
  selector: "[matNavigationRailItemIcon]",
  host: {
    class: "mat-navigation-rail-item__icon",
  },
})
export class MatNavigationRailItemIcon {}

@Directive({
  selector: "[matNavigationRailItemLabel]",
  host: {
    class: "mat-navigation-rail-item__label",
  },
})
export class MatNavigationRailItemLabel {}

@Component({
  selector: "mat-navigation-rail-item,[mat-navigation-rail-item]",
  templateUrl: "./navigation-rail-item.html",
  host: {
    class: "mat-navigation-rail-item",
    "[class.mat-navigation-rail-item-with-label]": "_label",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MatNavigationRailItem {
  @ContentChild(MatNavigationRailItemIcon)
  _icon?: MatNavigationRailItemIcon;

  @ContentChild(MatNavigationRailItemLabel)
  _label?: MatNavigationRailItemLabel;
}

@Component({
  selector: "mat-navigation-rail",
  templateUrl: "./navigation-rail.html",
  styleUrls: ["./navigation-rail.scss"],
  host: {
    class: "mat-navigation-rail",
    role: "navigation",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MatNavigationRail {}
