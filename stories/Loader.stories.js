import React from 'react';
import RollerLoader from 'src/components/RollerLoader';
import DotsLoader from 'src/components/DotsLoader';

export default {
    title: 'Loader',
    component: RollerLoader,
};

export const DefaultLoader = () => <RollerLoader />;
export const SmallLoader = () => <DotsLoader />;

SmallLoader.story = {
    decorators: [storyFn => <div style={{ backgroundColor: 'lightgray', width: '100%', height: '100vh' }}>{storyFn()}</div>],
};
