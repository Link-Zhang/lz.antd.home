import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NumberCard from '../NumberCard';

class SaleHouse extends React.PureComponent {
    render() {
        return (
            <NumberCard svg={'HomeOutlined'} color={'#5B8FF9'} title={'在售房屋'}
                        number={this.props.saleHouse || 0} unit={'套'}/>
        );
    }
}

SaleHouse.propTypes = {
    saleHouse: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        saleHouse: state.Dashboard.saleHouse,
    }
};

export default connect(mapStateToProps, null)(SaleHouse);
