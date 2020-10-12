import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NumberCard from '../NumberCard';

class FallHouse extends React.PureComponent {
    render() {
        return (
            <NumberCard svg={'ArrowDownOutlined'} color={'#52C41A'} title={'跌价房屋'}
                        number={this.props.fallHouse || 0} unit={'套'}/>
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
