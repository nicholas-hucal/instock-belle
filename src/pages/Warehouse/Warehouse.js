import './Warehouse.scss';
import React from 'react';
import {Link} from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";

class Warehouse extends React.Component{
  render(){
  return (
    <main className='warehouse'>
      <section className="warehouse__header">
        <Link to="/">
          <img src={arrow} className="warehouse__header-icons" />
        </Link>
        <h1 className="warehouse__header-text">Washington</h1>
        <Link to="/">
          <img src={editPen} className="warehouse__header-icons" />
        </Link>
      </section>
    </main>
  )}
}

export default Warehouse