import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { ResourceModel } from 'ngx-resource-factory/resource/resource-model';

import { User } from '@app/services/resource/user.resource';
import { CountState } from '@app/shared/state/count/count.state';
import { Add, Clear } from '@app/shared/state/count/count.actions';


@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {
    currentUser: ResourceModel<User>;

    @Select(CountState) count: Observable<number>;

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
