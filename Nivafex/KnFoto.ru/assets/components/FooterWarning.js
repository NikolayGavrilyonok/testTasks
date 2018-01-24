import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './FooterWarning.css';

class FooterWarning extends React.Component {
    render() {
        return (
                <div className = 'footer-warning'>
                    <span className = 'footer-warning__text'>
                        Использование материалов сайта разрешается при указании активной ссылки на источник затягиваются по времени из-за большого кольичества дублей с длительными техническими перерывами между ними
                    </span>
                </div>
            );
    }
}

export default FooterWarning;
