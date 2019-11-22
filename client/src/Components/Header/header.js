import React from 'react';
import './header.scss';
import logo from '../../assets/images/logo.svg';
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
                        <img className="header__logo" src={logo} />
                    </div>
                    <div className="header__search-container">
                        <input className="header__search" placeholder="Search"></input>
                    </div>
                </div>
                <div className="header__button-container">
                    <button className="header__button">LOGIN</button>
                    <button className="header__button">REGISTER</button>
                </div>
            </div>
        )
    }
}
export default Header;

