import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'src/settings/theme';
import store from 'src/redux/store';
import Router from './Router';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <Router />
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
