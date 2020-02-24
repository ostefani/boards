import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Page from './style';

export default ({ children }) => {
    return (
        <Page>
            <Header />
            {children}
            <Footer />
        </Page>
    );
};
