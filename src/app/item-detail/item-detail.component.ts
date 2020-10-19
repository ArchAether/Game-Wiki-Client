import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item = { 
    id: 0,
    name: "Dummy item",
    description: "This is a description.",
    category: "non-existent",
    mapLocations: 0,
    acquisition: "From thin air."
  };

  constructor() { }

  ngOnInit(): void {
  }

}
