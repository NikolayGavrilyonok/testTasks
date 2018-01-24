import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './FooterLinks.css';

class FooterLinks extends React.Component {
    callBackStop = () => {
        this.props.callBackStop();
    }

    render() {
        return (
                <div className = 'footer-links'>
                    <ul className = 'footer-links__links'
                        onClick = {this.callBackStop}>
                        <li className = 'footer-links__link'>
                            Подписаться на новости</li>
                        <li className = 'footer-links__link'>
                            Мобильная версия сайта</li>
                        <li className = 'footer-links__link'>Помощь</li>
                    </ul>
                </div>
            );
    }
}

export default FooterLinks;
