import React from 'react';
import './hero.scss';
import '../../assets/images/sample-hero.jpg';


class Hero extends React.Component {

    render() {
        return (
            <div className="hero">
                <div className="hero__title-container">
                    <h1 className="hero__title">Example Text</h1>
                </div>
                <div className="hero__text-container">
                    <p className="hero__text">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                </div>
            </div>
        )
    }
}
export default Hero;

