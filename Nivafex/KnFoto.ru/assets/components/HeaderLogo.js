import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './HeaderLogo.css';

class Header extends React.Component {
    callBackHome = () => {
        this.props.callBackHome();
    }

    render() {
        return (
                <div className = 'header-logo'>
                    <img className = 'header-logo__image'
                        src = 'assets/img/logo.jpg'
                        onClick = {this.callBackHome}/>
                </div>
            );
    }
}

export default Header;
