import React, { Suspense } from 'react';
import Loader from 'src/components/DotsLoader';

export default ({ component: Component, ...rest }) => (
    <Suspense fallback={<Loader type="base" />}>
        <Component {...rest} />
    </Suspense>
);
