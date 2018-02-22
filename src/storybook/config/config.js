import {configure} from '@storybook/angular';

/**
 * Load styles
 */
import "../styles/main.scss";

/**
 * Stories
 */
function loadStories() {
    require('../stories/input.component');
    require('../stories/icon-input.component');
}

configure(loadStories, module);
