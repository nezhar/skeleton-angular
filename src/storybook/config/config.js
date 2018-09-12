import {configure} from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

/**
 * Load styles
 */
import '!style-loader!css-loader!sass-loader!../styles/main.scss';


setOptions({
    name: 'Skeleton Angular',
    hierarchyRootSeparator: /\|/,
});


function loadStories() {
    require('../stories/test.stories');
    require('../stories/button.component');
}

configure(loadStories, module);
