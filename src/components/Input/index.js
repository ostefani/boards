import React, { useState, useRef, useEffect } from 'react';
import Label from 'src/components/Label';
import Error from 'src/components/Error';
import {
    OuterContainer,
    Container,
    Input,
} from './style';

export default ({ name, error, type = 'text' }) => {
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
        <OuterContainer>
            <Container ref={container} isFocused={isFocused}>
                <Label
                    htmlFor={name}
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
            {error && <Error>{error}</Error>}
        </OuterContainer>
    );
};
