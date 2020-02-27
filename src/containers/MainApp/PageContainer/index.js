import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { Page, Container } from './style';

export default ({ children }) => {
    return (
        <Container>
            <Page>
                <Header />
                {children}
                <Footer />
            </Page>
        </Container>
    );
};
