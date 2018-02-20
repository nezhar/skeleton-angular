import { Component, OnInit } from '@angular/core';

import { StateService } from "@uirouter/angular";
 
import { AlertService, AuthenticationService } from 'app/services';
 
@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.scss'
    ]
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
      private state: StateService,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }
 
    ngOnInit() {}
 
    login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
          data => {
              this.state.go('root');
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          }
        );
    }
}