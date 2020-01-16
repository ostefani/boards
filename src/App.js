import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/settings/theme';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>

            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
