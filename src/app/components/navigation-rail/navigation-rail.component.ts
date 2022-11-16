import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-navigation-rail",
  templateUrl: "./navigation-rail.component.html",
  styleUrls: ["./navigation-rail.component.scss"],
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
