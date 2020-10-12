import React from 'react';
import PropTypes from 'prop-types';
import {Card, Statistic} from 'antd';
import CountUp from 'react-countup';

import './index.less';
import Svg from '../../../../components/Svg';

const NumberCard = ({svg, color, title, number, unit}) => {
    return (
        <Card hoverable size={'small'}>
            <Statistic
                title={title}
                value={' '}
                valueStyle={{color: `${color}`}}
                prefix={
                    <div>
                        <Svg type={svg}/>
                        {'    '}
                        <CountUp start={0} end={number} duration={2.75} useEasing useGrouping separator={','}/>
                    </div>
                }
                suffix={unit}
            />
        </Card>
    )
};

NumberCard.propTypes = {
    svg: PropTypes.string, // 图标 HomeOutlined
    color: PropTypes.string, // 颜色 #64EA91
    title: PropTypes.string, // 标题 房屋总数
    number: PropTypes.number, // 数字 1000
    unit: PropTypes.string, // 单位 间
};

export default NumberCard;
