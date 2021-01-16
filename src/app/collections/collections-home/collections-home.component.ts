import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Yasmin', age: 28, job: 'Engineer', employed: false },
    { name: 'Moosa', age: 45, job: 'Artist', employed: true },
  ];
  headers = [
    { key: 'employed', label: 'Employed' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
