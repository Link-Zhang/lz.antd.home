import React from 'react';

class CustomizedLabel extends React.PureComponent {
    render() {
        const {
            x, y, stroke, value,
        } = this.props;

        return <text x={x} y={y} dy={-3} fill={stroke} fontSize={10} textAnchor={'middle'}>{value}</text>;
    }
}

export default CustomizedLabel;
