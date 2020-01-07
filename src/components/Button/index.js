import React, { useState, useRef, useEffect } from 'react';
import { Button, Ripple, RippleContainer } from './style';

export default ({
    type, size, isDisabled, name, onClick,
}) => {
    const button = useRef(null);
    const [buttonParams, setButtonParams] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    const [ripples, setRipples] = useState([]);

    const handleAnimationEnd = (e, id) => {
        setRipples([...ripples.filter(ripple => (ripple.id !== id))]);
    };

    const handleClick = e => {
        setIsClicked(true);
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

    useEffect(() => {
        setButtonParams(button.current.getBoundingClientRect());
    }, []);
    useEffect(() => {
        if (ripples.length === 0) {
            setIsClicked(false);
        }
    }, [ripples]);
    return (
        <Button
            ref={button}
            type={type}
            disabled={isDisabled}
            size={size}
            onClick={handleClick}
        >
            <span>{name}</span>
            {isClicked && (
                <RippleContainer>
                    {ripples.map(ripple => (
                        <Ripple
                            key={ripple.id}
                            ripple={ripple}
                            onAnimationEnd={e => handleAnimationEnd(e, ripple.id)}
                        />
                    ))}
                </RippleContainer>
            )}
        </Button>
    );
};
