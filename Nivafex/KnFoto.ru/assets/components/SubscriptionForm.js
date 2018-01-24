import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './SubscriptionForm.css';

class SubscriptionForm extends React.Component {
    callBackSubscribe = (event) => {
        if (event.target.type === 'submit') {
            event.preventDefault();
        console.log('Email: ' + event.currentTarget.email.value
                    + '\n' + 'Name: ' + event.currentTarget.name.value);
        }
    }

    render() {
        return (
                <form className = 'subscription-form'
                    onClick = {this.callBackSubscribe}>
                    <span className = 'subscription-form__title'>
                        Подпишитесь на рассылку KnFoto.ru</span>
                    <input className = 'subscription-form__email' type = 'email'
                        name = 'email' placeholder = 'Ваш e-mail'/>
                    <input className = 'subscription-form__name' type = 'text'
                        name = 'name' placeholder = 'Ваше имя:'/>
                    <input className = 'subscription-form__submit'
                        type = 'submit' value = 'Подписаться'/>
                </form>
            );
    }
}

export default SubscriptionForm;
