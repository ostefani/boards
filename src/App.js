import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import theme from 'src/settings/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="root">
                <h1>Boards</h1>
                <Button />
            </div>
        </ThemeProvider>
    );
}

export default App;
