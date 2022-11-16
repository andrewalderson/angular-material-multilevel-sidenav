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
  selector: "[appNavigationRailItemIcon]",
})
export class NavigationRailItemIconDirective {
  @HostBinding("class") get hostClasses() {
    return "app-navigation-rail-item__icon";
  }
}

@Directive({
  selector: "[appNavigationRailItemLabel]",
})
export class NavigationRailItemLabelDirective {
  @HostBinding("class") get hostClasses() {
    return "app-navigation-rail-item__label";
  }
}

@Component({
  selector: "app-navigation-rail-item,[app-navigation-rail-item]",
  templateUrl: "./navigation-rail-item.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NavigationRailItemComponent implements OnInit {
  @HostBinding("class") get hostClasses() {
    return "app-navigation-rail-item";
  }

  @ContentChild(NavigationRailItemIconDirective)
  _icon?: NavigationRailItemIconDirective;

  @ContentChild(NavigationRailItemLabelDirective)
  _label?: NavigationRailItemLabelDirective;

  @HostBinding("class.app-navigation-rail-item-with-label") get labelClass() {
    return this._label;
  }

  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: "app-navigation-rail",
  templateUrl: "./navigation-rail.html",
  styleUrls: ["./navigation-rail.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NavigationRailComponent implements OnInit {
  @HostBinding("class") get hostClasses() {
    return "app-navigation-rail";
  }

  @HostBinding("attr.role") get role() {
    return "navigation";
  }
  constructor() {}

  ngOnInit(): void {}
}
