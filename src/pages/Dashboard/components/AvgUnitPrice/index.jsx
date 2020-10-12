import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NumberCard from '../NumberCard';

class AvgUnitPrice extends React.PureComponent {
    render() {
        return (
            <NumberCard svg={'PayCircleOutlined'} color={'#73D13D'} title={'平均单价'}
                        number={this.props.avgUnitPrice || 0} unit={'元'}/>
        );
    }
}

AvgUnitPrice.propTypes = {
    avgUnitPrice: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        avgUnitPrice: state.Dashboard.avgUnitPrice,
    }
};

export default connect(mapStateToProps, null)(AvgUnitPrice);
