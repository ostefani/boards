import React from 'react';
import {
    Button
} from './style';

export default ({ type, size, isDisabled, name, onClick }) => {
    return <Button
                type={type}
                disabled={isDisabled}
                size={size}
                onClick={onClick}>
                {name}
            </Button>
};
