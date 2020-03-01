import React, { useState } from 'react';
import ModalTask from 'src/components/ModalTask';
import {
    Header,
    TaskContainer,
    Button,
    DateComponent,
} from './style';

export default ({ title, date, description }) => {
    console.log('title: ', title);
    console.log('date: ', date);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <TaskContainer>
                <Button onClick={handleClick} aria-label="Open Task in modal window" />
                <Header>{title}</Header>
                <DateComponent>{date}</DateComponent>
            </TaskContainer>
            <ModalTask
                title={title}
                date={date}
                description={description}
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
            />
        </>
    );
};
