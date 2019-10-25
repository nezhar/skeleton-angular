import { storiesOf } from '@storybook/angular';


storiesOf('Test Stories', module)
    .add('Test story 1', () => ({
        template: `
            <h1>Test 1</h1>
        `,
    }))
    .add('Test story 2', () => ({
        template: `
            <h1>Test 2</h1>
        `,
    }));
