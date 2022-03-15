import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/InStock-Logo_1x.png";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
        <header className="header">
          <div className="header__container">
               <NavLink to= "/" exact className="header__logo">
                   <img src={Logo}  alt="logo" />
                </NavLink>
                <div className="header__container__list">
                    <div className="header__container__list__active">
                        <NavLink to="/">Warehouse</NavLink>
                    </div>
                    <div className="header__container__list__item">
                        <NavLink to="/inventory">Inventory</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Header;