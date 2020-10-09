import React from 'react';
import moment from 'moment';
import {BackTop, Layout} from 'antd';

import './index.less';

const {Footer} = Layout;

class Foot extends React.PureComponent {
    render() {
        const author = 'Link Zhang';
        const from = moment().year();
        const to = moment().add(70, 'y').year();
        return (
            <Footer className={'foot'}><BackTop/>{author}©{from}-{to}</Footer>
        );
    };
}

export default Foot;
