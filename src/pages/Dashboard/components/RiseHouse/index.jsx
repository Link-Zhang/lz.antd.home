import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NumberCard from '../NumberCard';

class RiseHouse extends React.PureComponent {
    render() {
        return (
            <NumberCard svg={'ArrowUpOutlined'} color={'#CF1322'} title={'涨价房屋'}
                        number={this.props.riseHouse || 0} unit={'套'}/>
        );
    }
}

RiseHouse.propTypes = {
    riseHouse: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        riseHouse: state.Dashboard.riseHouse,
    }
};

export default connect(mapStateToProps, null)(RiseHouse);
