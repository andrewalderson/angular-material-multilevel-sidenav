import { BooleanInput, coerceBooleanProperty } from "@angular/cdk/coercion";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  Optional,
  ViewEncapsulation,
} from "@angular/core";
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleConfig,
  RippleGlobalOptions,
  ThemePalette,
} from "@angular/material/core";

export const MAT_NAVIGATION_RAIL = new InjectionToken<string>(
  "MAT_NAVIGATION_RAIL"
);

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
  selector:
    "mat-navigation-rail-item, a[mat-navigation-rail-item], button[mat-navigation-rail-item]",
  templateUrl: "./navigation-rail-item.html",
  host: {
    class: "mat-navigation-rail-item",
    "[class.mat-navigation-rail-item-with-label]": "_label",
    "[class.mat-navigation-rail-item--disabled]": "disabled",
    "[class.mat-navigation-rail-item--active]": "active",
    "[attr.aria-disabled]": "disabled",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MatNavigationRailItem {
  @ContentChild(MatNavigationRailItemIcon)
  _icon?: MatNavigationRailItemIcon;

  @ContentChild(MatNavigationRailItemLabel)
  _label?: MatNavigationRailItemLabel;

  rippleConfig: RippleConfig & RippleGlobalOptions;

  @Input()
  get active(): boolean {
    return this._active;
  }
  set active(value: BooleanInput) {
    this._active = coerceBooleanProperty(value);
  }
  private _active = false;

  @Input()
  get disabled(): boolean {
    return this._disabled || this._navigationRail?.disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  get disableRipple(): boolean {
    return this._disableRipple;
  }

  set disableRipple(value: BooleanInput) {
    this._disableRipple = coerceBooleanProperty(value);
  }

  private _disableRipple: boolean = false;

  get rippleDisabled(): boolean {
    return (
      this.disabled ||
      this.disableRipple ||
      this._navigationRail.disableRipple ||
      !!this.rippleConfig.disabled
    );
  }

  constructor(
    readonly elementRef: ElementRef<HTMLElement>,
    @Inject(MAT_NAVIGATION_RAIL) private _navigationRail: MatNavigationRail,
    @Optional()
    @Inject(MAT_RIPPLE_GLOBAL_OPTIONS)
    globalRippleOptions: RippleGlobalOptions | null,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationMode?: string
  ) {
    this.rippleConfig = globalRippleOptions || {};

    if (animationMode === "NoopAnimations") {
      this.rippleConfig.animation = { enterDuration: 0, exitDuration: 0 };
    }

    // doing this for compatibility with mat-list-item
    const hostElement = elementRef.nativeElement;
    if (
      hostElement.nodeName.toLowerCase() === "button" &&
      !hostElement.hasAttribute("type")
    ) {
      hostElement.setAttribute("type", "button");
    }
  }
}

@Component({
  selector: "nav[mat-navigation-rail]",
  templateUrl: "./navigation-rail.html",
  styleUrls: ["./navigation-rail.scss"],
  host: {
    class: "mat-navigation-rail",
    "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"',
    "[class.mat-primary]": 'color !== "warn" && color !== "accent"',
    "[class.mat-accent]": 'color === "accent"',
    "[class.mat-warn]": 'color === "warn"',
    "[attr.aria-disabled]": "disabled",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: MAT_NAVIGATION_RAIL, useExisting: MatNavigationRail }],
})
export class MatNavigationRail {
  @Input() color: ThemePalette = "primary";

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  get disableRipple(): boolean {
    return this._disableRipple;
  }

  set disableRipple(value: BooleanInput) {
    this._disableRipple = coerceBooleanProperty(value);
  }

  private _disableRipple: boolean = false;

  constructor(
    @Optional() @Inject(ANIMATION_MODULE_TYPE) readonly _animationMode?: string
  ) {}
}
