import React, { useState, useRef, useEffect } from 'react';
import DefaultLabel from 'src/components/Label';
import Error from 'src/components/Error';
import LabelWithError from 'src/components/Label/withError';
import ContainerWithError from './withError';
import {
    OuterContainer,
    DefaultContainer,
    Input,
} from './style';

export default ({
    label, name, error, type = 'text', value, onChange,
}) => {
    const container = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [height, setHeight] = useState();

    useEffect(() => {
        setHeight(container.current.scrollHeight);
    }, []);

    useEffect(() => {
        if (value && value.length > 0) {
            setIsFilled(true);
        }
    }, [value]);

    const Container = error ? ContainerWithError : DefaultContainer;
    const Label = error ? LabelWithError : DefaultLabel;
    return (
        <OuterContainer>
            <Container ref={container} isFocused={isFocused}>
                <Label
                    htmlFor={name}
                    isFocused={isFocused}
                    isFilled={isFilled}
                    height={height}
                >{label}
                </Label>
                <Input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={onChange}
                />
            </Container>
            {error && <Error>{error}</Error>}
        </OuterContainer>
    );
};
