import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './RegisterForm.css';

class RegisterForm extends React.Component {
    callBackValidate = (event) => {
        event.preventDefault();
        let form = event.currentTarget;
        let firstName = form.firstName.value;
        let lastName = form.lastName.value;
        let age = form.age.value;
        let email = form.email.value;
        let login = form.login.value;
        let pass1 = form.password.value;
        let pass2 = form.confirmPassword.value;
        
        console.log('-------------------');
        
        if (!firstName) {
            console.log('Введите имя');
        }
        if (!lastName) {
            console.log('Введите фамилию');
        }
        if (age < 18) {
            console.log('Возраст не менее 18 лет');
        }
        if (!email) {
            console.log('Введите email');
        }
        if(!login) {
            console.log('Введите login');
        }
        if (!pass1 || !pass2) {
            console.log('Введите пароль');
        }
        if (!(pass1 === pass2)) {
            console.log('Пароли не совпадают');
        }
        if (firstName && lastName && age >= 18 && email && login && pass1 === pass2) {
            console.log('Введённые данные:' + '\n'
                        + 'Имя: ' + firstName + '\n'
                        + 'Фамилия: ' + lastName + '\n'
                        + 'Возраст: ' + age + '\n'
                        + 'Email: ' + email + '\n'
                        + 'Login: ' + login + '\n'
                        + 'Пароль: ' + pass1);
        }
        
        console.log('-------------------');
    }

    render() {
        return (
                <div className = 'register-form-wrapper'>
                    <form className = 'register-form' onSubmit = {this.callBackValidate} noValidate>
                        <h2 className = 'register-form__title'>Создать учётную запись</h2>
                        <input className = 'register-form__first-name-input' type = 'text' name = 'firstName' placeholder = 'Имя'/>
                        <input className = 'register-form__last-name-input' type = 'text' name = 'lastName' placeholder = 'Фамилия'/>
                        <input className = 'register-form__age-input' type = 'number' name = 'age' placeholder = 'Возраст'/>
                        <input className = 'register-form__email-input' type = 'email' name = 'email' placeholder = 'Email'/>
                        <input className = 'register-form__login-input' type = 'text' name = 'login' placeholder = 'Login'/>
                        <input className = 'register-form__password-input' type = 'password' name = 'password' placeholder = 'Пароль'/>
                        <input className = 'register-form__confirm-password-input' type = 'password' name = 'confirmPassword' placeholder = 'Подтвердите пароль'/>
                        <input className = 'register-form__submit-input' type = 'submit' name ='submit' value = 'Регистрация'/>
                    </form>
                </div>
            );
    }
}

export default RegisterForm;
