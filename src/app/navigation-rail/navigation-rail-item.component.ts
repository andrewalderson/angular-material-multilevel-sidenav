import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-rail-item',
  templateUrl: './navigation-rail-item.component.html',
  styleUrls: ['./navigation-rail-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationRailItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
