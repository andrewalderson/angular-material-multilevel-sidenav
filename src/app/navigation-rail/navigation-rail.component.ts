import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-rail',
  templateUrl: './navigation-rail.component.html',
  styleUrls: ['./navigation-rail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationRailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
