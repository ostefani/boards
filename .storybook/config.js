import React from 'react';
import { ThemeProvider } from 'styled-components'
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import theme from 'src/settings/theme';


addDecorator(withA11y);

// to wrap a story in some formatting, or provide some context to the story
addDecorator((storyFn) => (
	<ThemeProvider theme={theme}>
		{storyFn()}
	</ThemeProvider>
));
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
