import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './PageStop.css';

class PageStop extends React.Component {
    render() {
        return (
                <div className = 'page-stop-wrapper'>
                    <span className = 'page-stop__text'>
                        This page is under construction</span>
                </div>
            );
    }
}

export default PageStop;
