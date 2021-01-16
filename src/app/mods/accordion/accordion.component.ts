import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openedItem = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    if (index === this.openedItem) {
      this.openedItem = -1;
    }

    this.openedItem = index;
  }
}
