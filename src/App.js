import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import theme from 'src/settings/theme';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="root">
                    <h1>Boards</h1>
                    <Button />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
