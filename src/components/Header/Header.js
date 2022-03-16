import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/InStock-Logo_1x.png";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
        <header className="header">
          <section className="header__container">
               <Link to= "/" className="header__logo">
                   <img src={Logo}  alt="logo" />
                </Link>
                <div className="header__list">
                    <NavLink to="/"  className="header__list-item" activeClassName="header__list-item--active">Warehouse</NavLink>
                    <NavLink to="/inventory"  className="header__list-item" activeClassName="header__list-item--active">Inventory</NavLink>
                </div>
            </section>
        </header>
    );
  }
}

export default Header;