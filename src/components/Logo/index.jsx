import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './index.less';
import config from './config';

class Logo extends React.PureComponent {
    render() {
        return (
            <div
                className={this.props.sideCollapse ? this.props.darkTheme ? 'logo-collapse-dark' : 'logo-collapse-light' : this.props.darkTheme ? 'logo-normal-dark' : 'logo-normal-light'}>
                <div className='logo-text'>
                    <Link to={'/'}>{this.props.sideCollapse ? config.logo[0] : config.logo}</Link>
                </div>
            </div>
        );
    }
}

Logo.propTypes = {
    sideCollapse: PropTypes.bool,
    darkTheme: PropTypes.bool,
};

const mapStateToProps = (state) => {
    return {
        sideCollapse: state.App.sideCollapse,
        darkTheme: state.App.darkTheme,
    };
};

export default connect(mapStateToProps, null)(Logo);
