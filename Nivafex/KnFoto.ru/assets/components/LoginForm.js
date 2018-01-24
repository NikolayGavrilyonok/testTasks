import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './LoginForm.css';

class LoginForm extends React.Component {
    callBackSubmit = (event) => {
        event.preventDefault();
        let form = event.target;
        console.log('Логин: ' + form.login.value + '\n'
                    + 'Пароль: ' + form.password.value);
    }

    render() {
        return (
                <div className = 'login-form-wrapper'>
                    <form className = 'login-form'
                        onSubmit = {this.callBackSubmit}>
                        <h2 className = 'register-form__title'>
                            Войти в систему</h2>
                        <input className = 'login-form__login-input'
                            type = 'text' name = 'login' placeholder = 'Логин'/>
                        <input className = 'login-form__password-input'
                            type = 'password' name = 'password'
                            placeholder = 'Пароль'/>
                        <input className = 'login-form__submit-input'
                            type = 'submit' name ='submit' value = 'Вход'/>
                    </form>
                </div>
            );
    }
}

export default LoginForm;
