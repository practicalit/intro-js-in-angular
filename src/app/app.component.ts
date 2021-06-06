import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample';
  introJS = introJs();// intro js object to be used

  /**
   * To use the intro js, add the options in the constructor.
   */
  constructor() {
    this.introJS.setOptions({
      steps: [
      {
         element: '#staticEmail',//this is the id given for the email field
         intro: 'Add your email here',
         position: 'top'
      },
      {
         element: '#inputPassword',//this is the id given for the password
         intro: "Followed by password",
         position: 'buttom'
      },
      {
         element: '#btn',//id given for the button
         intro: "Then click on the button",
         position: 'left'
      }
   ],
   showProgress: false
  });
  }
  ngOnInit() {
    this.introJS.start();
  }
}
