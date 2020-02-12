import React from 'react';
import RollerLoader from 'src/components/RollerLoader';
import BarsLoader from 'src/components/BarsLoader';

export default {
    title: 'Loader',
    component: RollerLoader,
};

export const DefaultLoader = () => <RollerLoader />;
export const SmallLoader = () => <BarsLoader />;

SmallLoader.story = {
    decorators: [storyFn => <div style={{ backgroundColor: 'lightgray', width: '100%', height: '100vh' }}>{storyFn()}</div>],
};
