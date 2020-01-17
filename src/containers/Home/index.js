import React from 'react';
import Header from 'src/components/Header';
import Jumbotron from 'src/components/Jumbotron';
import Footer from 'src/components/Footer';
import ButtonLink from 'src/components/ButtonLink';

import Page from './style';

export default () => {
    return (
        <Page>
            <Header />
            <Jumbotron />
            <Footer />
        </Page>
    );
};
