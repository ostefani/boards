import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import theme from 'src/settings/theme';
import store from 'src/redux/store';
import '../src/index.css';

addDecorator(withA11y);

// to wrap all stories in some formatting, or provide some context to the story
addDecorator((storyFn) => (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
        <Router>
        {storyFn()}
        </Router>
    </Provider>
    </ThemeProvider>
));

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
