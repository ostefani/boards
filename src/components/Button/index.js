import React, { useState, useRef, useEffect } from 'react';
import { Button, Ripple, RippleContainer } from './style';

export default ({
    type, size, isDisabled, name, onClick,
}) => {
    const button = useRef(null);
    const [buttonParams, setButtonParams] = useState({});
    const [ripples, setRipples] = useState([]);

    const handleAnimationEnd = (e, id) => {
        setRipples([...ripples.filter(ripple => (ripple.id !== id))]);
    };

    const handleClick = e => {
        e.stopPropagation();
        onClick();
        setRipples([...ripples, {
            posX: e.pageX - e.currentTarget.offsetLeft,
            posY: e.pageY - e.currentTarget.offsetTop,
            id: Math.random().toString(),
            width: buttonParams.width,
            height: buttonParams.height,
        }]);
    };

    console.log('ripples: ', ripples);

    useEffect(() => {
        setButtonParams(button.current.getBoundingClientRect());
    }, []);

    return (
        <Button
            ref={button}
            type={type}
            disabled={isDisabled}
            size={size}
            onClick={handleClick}
        >
            <span>{name}</span>
            {true
                && (
                    <RippleContainer>
                        {ripples.map(ripple => <Ripple key={ripple.id} ripple={ripple} onAnimationEnd={e => handleAnimationEnd(e, ripple.id)} />)}
                    </RippleContainer>
                )}
        </Button>
    );
};
