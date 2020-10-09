import React from 'react';

const Svg = ({type}) => {
    const icons = require(`@ant-design/icons`);
    const Component = icons[type];
    return (
        <Component/>
    );
};

export default Svg;
