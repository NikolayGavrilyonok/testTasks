import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './MainArticle.css';

class MainArticle extends React.Component {
    callBackStop = () => {
        this.props.callBackStop();
    }

    render() {
        return (
                this.props.article.map( (article) =>
                    <article key = 'ma' className = 'main-article__article'>
                        <img className = 'main-article__image'
                            src = {article.src}/>
                        <div className = 'main-article__text-container'>
                            <span className = 'main-article__article-header'
                                onClick = {this.callBackStop}>
                                {article.header}</span>
                            <span className = 'main-article__quote'>
                                {article.quote}</span>
                            <span className = 'main-article__article-text'>
                                {article.text}</span>
                        </div>
                    </article>
                )
            );
    }
}

export default MainArticle;
