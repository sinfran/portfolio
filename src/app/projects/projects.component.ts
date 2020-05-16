import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slowFade', [
      state('in', style({ 
        opacity: 1
      })),
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('700ms 200ms ease-in')
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

  initProject() {
    console.log('function called');
  }



}
