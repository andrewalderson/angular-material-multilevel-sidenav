import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

@Directive({
  selector: "[matNavigationRailItemIcon]",
})
export class MatNavigationRailItemIcon {
  @HostBinding("class") get hostClasses() {
    return "mat-navigation-rail-item__icon";
  }
}

@Directive({
  selector: "[matNavigationRailItemLabel]",
})
export class MatNavigationRailItemLabel {
  @HostBinding("class") get hostClasses() {
    return "mat-navigation-rail-item__label";
  }
}

@Component({
  selector: "mat-navigation-rail-item,[mat-navigation-rail-item]",
  templateUrl: "./navigation-rail-item.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MatNavigationRailItem implements OnInit {
  @HostBinding("class") get hostClasses() {
    return "mat-navigation-rail-item";
  }

  @ContentChild(MatNavigationRailItemIcon)
  _icon?: MatNavigationRailItemIcon;

  @ContentChild(MatNavigationRailItemLabel)
  _label?: MatNavigationRailItemLabel;

  @HostBinding("class.mat-navigation-rail-item-with-label") get labelClass() {
    return this._label;
  }

  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: "mat-navigation-rail",
  templateUrl: "./navigation-rail.html",
  styleUrls: ["./navigation-rail.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MatNavigationRail implements OnInit {
  @HostBinding("class") get hostClasses() {
    return "mat-navigation-rail";
  }

  @HostBinding("attr.role") get role() {
    return "navigation";
  }
  constructor() {}

  ngOnInit(): void {}
}
