import { configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import 'bootstrap/dist/css/bootstrap.css';

setConsoleOptions({
panelExclude: [],
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
