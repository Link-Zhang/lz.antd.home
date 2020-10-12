import {Card} from 'antd';
import React from 'react';
import {ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';

import CustomizedLabel from '../CustomizedLabel';

const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
];

class AvgTotalPriceChart extends React.PureComponent {
    render() {
        return (
            <Card hoverable title={'平均总价'} size={'small'}>
                <ResponsiveContainer width={'100%'} height={250}>
                    <LineChart data={data} margin={{top: 0, right: 5, left: 5, bottom: 0}} syncId={'chartSyncId'}>
                        <CartesianGrid strokeDasharray={'3 3'}/>
                        <XAxis dataKey={'name'} tickLine={false}/>
                        <YAxis yAxisId={'left'} tickLine={false} unit={'万'}/>
                        <YAxis yAxisId={'right'} orientation={'right'} tickLine={false} unit={'套'}/>
                        <Tooltip/>
                        <Legend verticalAlign={'top'}/>
                        <Line yAxisId={'left'} type={'monotone'} dataKey={'pv'} stroke={'#FF4D4F'} connectNulls
                              label={<CustomizedLabel/>}/>
                        <Line yAxisId={'right'} type={'monotone'} dataKey={'uv'} stroke={'#9254DE'} connectNulls/>
                    </LineChart>
                </ResponsiveContainer>
            </Card>
        );
    }
}

export default AvgTotalPriceChart;
