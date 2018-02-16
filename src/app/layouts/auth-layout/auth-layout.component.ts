import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: require('./auth-layout.component.html'),
  styles: [
      require('./auth-layout.component.scss')
  ]
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
