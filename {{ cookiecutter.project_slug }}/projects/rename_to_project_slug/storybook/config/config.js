import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

/**
 * Load styles
 */
import '!style-loader!css-loader!sass-loader!../styles/main.scss';


setOptions({
    name: '{{ cookiecutter.project_title }}',
    hierarchyRootSeparator: /\|/,
});


function loadStories() {
    require('../stories/components/test.stories');
    require('../stories/components/button.component');
}

configure(loadStories, module);
