import React from 'react';
import WithStyle from 'src/components/Link/style';
import Footer from './style';

const Link = WithStyle(({ href, className }) => (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">Olga Stefanishyna</a>
));

export default () => (
    <Footer>
        <Link href="https://github.com/ostefani" className="footer-link" />
    </Footer>
);
