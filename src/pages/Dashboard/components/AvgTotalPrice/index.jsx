import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NumberCard from '../NumberCard';

class AvgTotalPrice extends React.PureComponent {
    render() {
        return (
            <NumberCard svg={'DollarOutlined'} color={'#FF4D4F'} title={'平均总价'}
                        number={this.props.avgTotalPrice || 0} unit={'万'}/>
        );
    }
}

AvgTotalPrice.propTypes = {
    avgTotalPrice: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        avgTotalPrice: state.Dashboard.avgTotalPrice,
    }
};

export default connect(mapStateToProps, null)(AvgTotalPrice);
