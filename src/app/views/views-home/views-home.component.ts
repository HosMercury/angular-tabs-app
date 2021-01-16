import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of users' },
    { value: 40, label: 'Revenue' },
    { value: 88, label: 'Reviews' }
  ];
  items = [
    { image: '/assets/images/couch.jpeg', title: 'Couch', description: 'This is fantastic' },
    { image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'This is fantastic' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
