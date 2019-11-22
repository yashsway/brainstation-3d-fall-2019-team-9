import React from 'react';
import './Topics.scss';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/backdrop.css'



class Topics extends React.Component {

    render() {
        tippy('.topics__button');

        return (
            <div className="topics">
                <div className="topics__title-container">
                    <p className="topics__title">Topics</p>
                </div>
                <div className="topics__button-container">
                    <button data-tippy-content="Tooltip" className="topics__button">Empathy</button>
                    <button className="topics__button">Innovation</button>
                    <button className="topics__button">Trust</button>
                </div>
            </div>
        )
    }
}
export default Topics;
