import React, { useEffect, useRef } from 'react';
import {
    Overlay,
    ContentContainer,
    Header,
    Description,
    DateComponent,
} from './style';

export default ({
    title, description, date, isOpen, setIsOpen,
}) => {
    const container = useRef(null);

    const handleClickOutside = e => {
        if (container.current && !container.current.contains(e.target) && isOpen) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    return (
        <Overlay isOpen={isOpen}>
            <ContentContainer ref={container} isOpen={isOpen}>
                <Header>{title}</Header>
                <Description>{description}</Description>
                <DateComponent>Due date: {date}</DateComponent>
            </ContentContainer>
        </Overlay>
    );
};
