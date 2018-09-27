export class Update {
    static readonly type = '[Language] Set';

    constructor(public language: string) {
    }
}
