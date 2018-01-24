import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './FooterInfo.css';

class FooterInfo extends React.Component {
    callBackStop = () => {
        this.props.callBackStop();
    }

    render() {
        return (
                <div className = 'footer-info'>
                    <ul className = 'footer-info__links'
                        onClick = {this.callBackStop}>
                        <li className = 'footer-info__link'>
                            Пользовательское соглашение</li>
                        <li className = 'footer-info__link'>
                            Информация для рекламодателей</li>
                        <li className = 'footer-info__link'>
                            Сообщить об ошибке на сайте</li>
                    </ul>
                </div>
            );
    }
}

export default FooterInfo;
