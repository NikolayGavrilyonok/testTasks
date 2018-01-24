import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './HeaderSearchBlock.css';

class HeaderSearchBlock extends React.Component {
    callBackSearch = (event) => {
        if (event.target.tagName === 'LABEL') {
            event.preventDefault();
            console.log('Search value: ' + event.currentTarget.search.value);
        }
    }

    render() {
        return (
                <div className = 'search-block'>
                    <form className = 'search-block-form'
                        onClick = {this.callBackSearch}>
                        <span className = 'search-field-input-wrapper'>
                            <input className = 'search-field-input'
                                type = 'search' name = 'search'/>
                        </span>
                        <input className = 'search-field-submit_hidden'
                            id = 'search-field-submit-id' type = 'submit'/>
                        <label className = 'search-field-label'
                            htmlFor = 'search-field-submit-id'>Поиск</label>
                    </form>
                </div>
            );
    }
}

export default HeaderSearchBlock;
