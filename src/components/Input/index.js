import React, { useState, useRef, useEffect } from 'react';
import Label from 'src/components/Label';
import {
    Container,
    Input,
} from './style';

export default ({ name, type = 'text' }) => {
    const container = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [height, setHeight] = useState();
    const [isFilled, setIsFilled] = useState(false);
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
    };

    useEffect(() => {
        setHeight(container.current.scrollHeight);
    }, []);

    useEffect(() => {
        setIsFilled(value.length > 0);
    }, [value]);

    console.log('value', value);
    return (
        <Container ref={container} isFocused={isFocused}>
            <Label
                for={name}
                isFocused={isFocused}
                isFilled={isFilled}
                height={height}
            >{name}
            </Label>
            <Input
                type={type}
                id={name}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleChange}
            />
        </Container>
    );
};
