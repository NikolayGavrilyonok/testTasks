import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './FooterSocial.css';

class FooterSocial extends React.Component {
    render() {
        return (
                <div className = 'footer-social-block'>
                    <a className = 'footer-social__button face-book-button'
                        href = 'https://www.facebook.com'></a>
                    <a className = 'footer-social__button twitter-button'
                        href = 'https://www.twitter.com'></a>
                    <a className = 'footer-social__button you-tube-button'
                        href = 'https://www.youtube.com'></a>
                </div>
            );
    }
}

export default FooterSocial;
