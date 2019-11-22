import React from 'react';
import './header.scss';
import sample from '../../assets/images/sample.jpg';
import { slide as Menu } from 'react-burger-menu'

class Header extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }


    render() { 
        return (
            <div className="header">
                <div className="header__logo-search-container">
                    <div className="header__logo-container">
                        <img className="header__logo" src={sample} />
                    </div>
                    <div className="header__search-container">
                        <input className="header__search" placeholder="Search"></input>
                    </div>
                </div>
                <div className="header__register-container">
                    <button className="header__register">Register</button>
                </div>
            </div>
        )
    }
}
export default Header;

