import { State, Action, StateContext } from '@ngxs/store';

import { Update } from '@app/shared/state/language/language.actions';


@State<string>({
    name: 'language',
    defaults: null
})
export class LanguageState {

    @Action(Update)
    update(ctx: StateContext<string>, payload: Update) {
        ctx.setState(payload.language);
    }

}
