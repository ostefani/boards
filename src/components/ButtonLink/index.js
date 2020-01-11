import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Ripple from 'src/components/Button/ripple';
import { Button } from 'src/components/Button/style';
import WithText from 'src/components/ButtonText/withText';

import RippleContainer from './withStyle';

export default WithText(props => {
    const button = useRef(null);
    const [buttonParams, setButtonParams] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    const [ripples, setRipples] = useState([]);

    const handleAnimationEnd = (e, id) => {
        setRipples([...ripples.filter(ripple => (ripple.id !== id))]);
    };

    const handleClick = e => {
        setIsClicked(true);
        props.onClick();
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
            as={Link}
            className="link"
            ref={button}
            to={props.to}
            {...props}
            onClick={handleClick}
        >
            {props.name}
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
});
