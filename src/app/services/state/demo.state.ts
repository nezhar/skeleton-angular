import { State, Action } from '@ngxs/store';

export class Add {
    static readonly type = 'Add';
}

export class Clear {
    static readonly type = 'Clear';
}

@State<number>({
    name: 'count',
    defaults: 0
})
export class DemoState {

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
