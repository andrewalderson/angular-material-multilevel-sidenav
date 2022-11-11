import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-navigation-rail",
  templateUrl: "./navigation-rail.component.html",
  styleUrls: ["./navigation-rail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationRailComponent implements OnInit {
  @HostBinding("class.app-navigation-rail") selectorClass = true;
  constructor() {}

  ngOnInit(): void {}
}
