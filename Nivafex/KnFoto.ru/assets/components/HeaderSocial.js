import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './HeaderSocial.css';

class HeaderSocial extends React.Component {
    render() {
        return (
                <div className = 'header-social-block'>
                    <a className = 'header-social__button face-book-button'
                        href = 'https://www.facebook.com'></a>
                    <a className = 'header-social__button twitter-button'
                        href = 'https://www.twitter.com'></a>
                    <a className = 'header-social__button you-tube-button'
                        href = 'https://www.youtube.com'></a>
                </div>
            );
    }
}

export default HeaderSocial;
