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

    require('../../app/modules/ngx-anx-forms/stories/input.stories');
    require('../../app/modules/ngx-anx-forms/stories/icon-input.stories');
    require('../../app/modules/ngx-anx-forms/stories/input-textarea.stories');
    require('../../app/modules/ngx-anx-forms/stories/input-checkbox.stories');
    require('../../app/modules/ngx-anx-forms/stories/input-radio.stories');
    require('../../app/modules/ngx-anx-forms/stories/input-select.stories');
    require('../../app/modules/ngx-anx-forms/stories/input-likert-scale.stories');
    require('../../app/modules/ngx-anx-forms/stories/input-distributed-multiple-choice.stories');
    require('../../app/modules/ngx-anx-forms/stories/input-error.stories');
}

configure(loadStories, module);
