import { Component, OnInit } from '@angular/core';

import { AlertService } from '@app/services/alert/alert.service';


@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: [
        './alert.component.scss'
    ]
})
export class AlertComponent implements OnInit {
    message: any;

    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => {

            // Map message type from Rest API to frontend message type
            if (message) {
                switch (message.type) {
                    case 'success':
                        message.fe_label = 'Success';
                        message.fe_type = 'success';
                        break;
                    case 'error':
                        message.fe_label = 'Error';
                        message.fe_type = 'danger';
                        break;
                    default:
                        message.fe_label = 'Info';
                        message.fe_type = 'light';
                }
            }

            this.message = message;
        });
    }

    closeMessage() {
        delete this.message;
    }
}
