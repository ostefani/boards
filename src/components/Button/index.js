import React, { useState, useRef, useEffect } from 'react';
import Ripple from './ripple';
import {
    Button, RippleContainer, Text,
} from './style';

export default ({
    type, isDisabled, name, onClick, className, size, as, to,
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
        // e.stopPropagation();
        if (onClick) {
            onClick();
        }
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
            className={className}
            size={size}
            onClick={handleClick}
            as={as && as}
            to={as && to}
        >
            <Text>{name}</Text>
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
