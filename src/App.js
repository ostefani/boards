import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'src/settings/theme';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/redux/store';
import MainRoute from './router';
// const MainRoute = React.lazy(() => import('./router'));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <Suspense fallback="Loading">
                        <MainRoute />
                    </Suspense>
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
