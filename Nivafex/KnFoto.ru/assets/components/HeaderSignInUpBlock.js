import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './HeaderSignInUpBlock.css';

class HeaderSignInUpBlock extends React.Component {
    callBackLogIn = () => {
        this.props.callBackLogIn();
    }
    callBackRegister = () => {
        this.props.callBackRegister();
    }
    render() {
        return (
                <div className = 'header-sign-in-up-block'>
                    <span className = 'header-sign-in-up-block__login'
                        onClick = {this.callBackLogIn}>Войти</span>
                    {' | '}
                    <span className = 'header-sign-in-up-block__register'
                        onClick = {this.callBackRegister}>Регистрация</span>
                </div>
            );
    }
}

export default HeaderSignInUpBlock;
