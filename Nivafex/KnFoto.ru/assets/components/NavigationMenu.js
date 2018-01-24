import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './NavigationMenu.css';

class NavigationMenu extends React.Component {
    callBackStop = (event) => {
        if (event.target.id === 'goHomePage') {
            return this.props.callBackHome();
        }
        this.props.callBackStop();
    }

    render() {
        return (
                <nav className = 'navigation-menu-block'>
                    <ul className = 'navigation-menu__menu'
                        onClick = {this.callBackStop}>
                        <li className = 'navigation-menu__menu-item'
                            id = 'goHomePage'>Главная</li>
                        <li className = 'navigation-menu__menu-item'>Статьи</li>
                        <li className = 'navigation-menu__menu-item'>
                            Фотошкола</li>
                        <li className = 'navigation-menu__menu-item'>
                            Тесты и обзоры</li>
                        <li className = 'navigation-menu__menu-item'>
                            Журнал</li>
                        <li className = 'navigation-menu__menu-item'>
                            События</li>
                        <li className = 'navigation-menu__menu-item'>Услуги</li>
                        <li className = 'navigation-menu__menu-item'>Форум</li>
                    </ul>
                </nav>
            );
    }
}

export default NavigationMenu;
