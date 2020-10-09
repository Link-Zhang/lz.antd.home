import React from 'react';
import {Avatar, Card} from 'antd';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import './index.less';
import Svg from '../../../../components/Svg';

const {Meta} = Card;

const NumberCard = ({svg, color, title, number}) => {
    return (
        <Card hoverable>
            <Meta
                avatar={
                    <Avatar size={48} style={{backgroundColor: `${color}`,}} icon={<Svg type={svg}/>}/>
                }
                title={title}
                description={
                    <CountUp start={0} end={number} duration={2.75} useEasing useGrouping separator=","/>
                }
            />
        </Card>
    )
};

NumberCard.propTypes = {
    svg: PropTypes.string, // 图标 HomeOutlined
    color: PropTypes.string, // 颜色 #64EA91
    title: PropTypes.string, // 标题 房屋总数
    number: PropTypes.number, // 数字 1000
};

export default NumberCard;
