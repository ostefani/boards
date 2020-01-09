/* import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/Button/style';

console.log('Button: ', Button);

export default ({ to, name, onClick }) => {
    return (
        <Button as={Link} href={to} name={name} onClick={onClick}>{name}</Button>
    );
}; */

import React from 'react';
import { Link } from 'react-router-dom';
import ButtonText from 'src/components/ButtonText';
import withStyle from './withStyle';

const customLink = () => <Link to='/home' />

const LinknWithStyle = withStyle(props => <Link className="link" to={props.to}/>);

export default function (props) {
    return (
        <ButtonText forwardedAs={Link} href="/go" {...props} />
    );
}
