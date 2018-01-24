import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './EventsBlock.css';

class EventsBlock extends React.Component {
    callBackStop = () => {
        this.props.callBackStop();
    }

    render() {
        return (
                this.props.events.map( (eventsBlock) =>
                    <div key = {eventsBlock.key} className = 'events-block'>
                        <div className = 'events-block__title'>
                            События | {eventsBlock.date}
                        </div>
                        {
                            eventsBlock.events.map( (events) =>
                                <article key = {events.key}
                                    className = 'events-block__event'>
                                    <img className = 'events-block__event-image'
                                        src = {events.src}/>
                                    <div className = 'events-block__event-text-container'>
                                        <span className = 'events-block__event-heaeder' onClick = {this.callBackStop}>
                                            {events.header}</span>
                                        <span className = 'events-block__event-text'>
                                            {events.text}</span>
                                    </div>
                                </article>
                            )
                        }
                    </div>
                )
            );
    }
}

export default EventsBlock;
