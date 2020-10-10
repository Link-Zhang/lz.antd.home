import React from 'react';
import moment from 'moment';
import {BackTop, Layout} from 'antd';

import './index.less';
import config from './config';

const {Footer} = Layout;

class Foot extends React.PureComponent {
    render() {
        const author = config.author;
        const from = moment().year();
        const to = moment().add(config.period, 'y').year();
        return (
            <Footer className={'foot-footer'}>
                <BackTop/>{author}©{from}-{to}
            </Footer>
        );
    };
}

export default Foot;
