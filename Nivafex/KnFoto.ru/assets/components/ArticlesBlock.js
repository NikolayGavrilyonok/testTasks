import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './ArticlesBlock.css';

class ArticlesBlock extends React.Component {
    callBackStop = () => {
        this.props.callBackStop();
    }

    render() {
        return (
                this.props.articles.map( (articlesBlock) =>
                    <div key = {articlesBlock.key} className = 'articles-block'>
                        <div className = 'articles-block__heading'>
                            {articlesBlock.heading}</div>
                        {
                            articlesBlock.articles.map( (article) =>
                                <article key = {article.key} className = 'articles-block__article'>
                                    <img  className = 'articles-block__image' src = {article.src}/>
                                    <span className = 'articles-block__header' onClick = {this.callBackStop}>
                                        {article.header}
                                    </span>
                                    <span className = 'articles-block__date' onClick = {this.callBackStop}>
                                        {article.date}
                                        {' | '}
                                        {article.comments} Комментариев
                                    </span>
                                    <span className = 'articles-block__paragraph1'>{article.paragraph1}</span>
                                    <span className = 'articles-block__paragraph2'>{article.paragraph2}</span>
                                    <button className = 'articles-block__button' onClick = {this.callBackStop}>Смотреть</button>
                                </article>
                            )
                        }
                    </div>
                )
            );
    }
}

export default ArticlesBlock;
