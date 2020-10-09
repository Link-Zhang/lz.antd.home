import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NumberCard from '../NumberCard';

class SaleHouse extends React.PureComponent {
    render() {
        return (
            <NumberCard svg={'HomeOutlined'} color={'#64EA91'} title={'在售房屋'}
                        number={this.props.saleHouse || 0}/>
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
