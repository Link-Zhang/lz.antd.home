import React from 'react';
import {Button, DatePicker, version} from 'antd';

class House extends React.PureComponent {
    render() {
        return <div className='App'>
            <h1>antd version: {version}</h1>
            <DatePicker/>
            <Button type='primary' style={{marginLeft: 8}}>
                House
            </Button>
        </div>;
    }
}

export default House;
