import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { User } from 'src/app/services/resource/user.resource';
import { Add, Clear, DemoState } from '@app/shared/state/demo.state';
import { ResourceModel } from 'ngx-resource-factory/resource/resource-model';

@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {
    currentUser: ResourceModel<User>;

    @Select(DemoState) count: Observable<number>;

    constructor(private store: Store) {
    }

    ngOnInit() {
        this.currentUser = this.store.snapshot().auth.user;
    }

    add() {
        this.store.dispatch(new Add());
    }

    clear() {
        this.store.dispatch(new Clear());
    }
}
