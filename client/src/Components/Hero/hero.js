import React from 'react';
import './hero.scss';
import '../../assets/images/sample-hero.jpg';
import logo from '../../assets/images/logo.png';

class Hero extends React.Component {

    render() {
        return (
            <div className="hero">
                <div className="hero__title-container">
                    <img src={logo} className="hero__title"></img>
                </div>
                <div className="hero__text-container">
                    <quote className="hero__text">"Strong leadership is important.
Inspire your leadership team with TEDL.  A curated collection of the most popular and relevant videos to help you achieve your leadership goals."</quote>
                </div>
            </div>
        )
    }
}
export default Hero;

