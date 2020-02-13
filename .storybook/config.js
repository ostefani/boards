import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import theme from 'src/settings/theme';
import '../src/index.css';

addDecorator(withA11y);

// to wrap all stories in some formatting, or provide some context to the story
addDecorator((storyFn) => (
    <ThemeProvider theme={theme}>
        <Router>
        {storyFn()}
        </Router>
    </ThemeProvider>
));
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
