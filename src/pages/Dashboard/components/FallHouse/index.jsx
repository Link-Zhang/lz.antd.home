import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NumberCard from '../NumberCard';

class FallHouse extends React.PureComponent {
    render() {
        return (
            <NumberCard svg={'FallOutlined'} color={'#7FFF00'} title={'降价房屋'}
                        number={this.props.fallHouse || 0}/>
        );
    }
}

FallHouse.propTypes = {
    fallHouse: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        fallHouse: state.Dashboard.fallHouse,
    }
};

export default connect(mapStateToProps, null)(FallHouse);