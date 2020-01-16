import React from 'react';
import {
    Route, Redirect, Switch, withRouter,
} from 'react-router-dom';

export default () => {
    return (
        <Switch>
            <Route path="/" />
        </Switch>
    );
};
