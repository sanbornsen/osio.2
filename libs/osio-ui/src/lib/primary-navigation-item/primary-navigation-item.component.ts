import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'osio-primary-navigation-item',
  templateUrl: './primary-navigation-item.component.html',
  styleUrls: ['./primary-navigation-item.component.css']
})
export class PrimaryNavigationItemComponent implements OnInit {

  @Input('item') item: string;
  @Input('route') route: string;

  constructor() { }

  ngOnInit() {
  }

}
