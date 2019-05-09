import { State, Action } from '@ngxs/store';

import { Add, Clear } from './count.actions';


@State<number>({
    name: 'count',
    defaults: 0
})
export class CountState {

    @Action(Add)
    add({getState, setState}) {
        const state = getState();
        setState(state + 1);
    }

    @Action(Clear)
    clear({setState}) {
        setState(0);
    }

}
