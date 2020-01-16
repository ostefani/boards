import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/settings/theme';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './router';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <MainRoute />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
