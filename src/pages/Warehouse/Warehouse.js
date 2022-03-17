import './Warehouse.scss';
import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import api from "../../utils/api.js";

class Warehouse extends React.Component{

  state = {
    selectedWarehouse: null,
    inventoryContent: null
  }

  // getInventory = (warehouseId) => {
  //   api.inventoryContent(warehouseId || this.state.inventoryContent[0].id)
  //   .then((res) => {
  //     this.setState({
  //       inventoryContent: res.data
  //     })
  //   })
  // }

  getSelectedWarehouse = () => {
    const warehouseId = this.props.match.params.warehouseId;
    api.getWarehouseById(warehouseId)
    .then((res) => {
      this.setState({
        selectedWarehouse: res.data
      })
      // this.getInventory(warehouseId || res.data[0].id)
      // console.log(res.data.contact.email)
    })
  }

  componentDidMount(){
    this.getSelectedWarehouse(this.props.match.params.warehouseId);
    // console.log(this.props.match.params.warehouseId)
  }

  // componentDidUpdate(prevProps){
  //   if(prevProps.match.params.id !== this.props.match.params.id){
  //     this.
  //   }
  // }


  render(){
    if (this.state.selectedWarehouse === null)
    return null

    // console.log(this.state.selectedWarehouse.contact.name)
    return (
    <main className='warehouse'>
      <section className="warehouse__header">
        <Link to="/">
          <img src={arrow} className="warehouse__header-icons" />
        </Link>
        <h2 className="warehouse__header-text">{this.state.selectedWarehouse.name}</h2>
        <Link to="/" className="warehouse__header-bg"></Link>
      </section>
      <section className="warehouse__info">
        <h4 className="warehouse__info-headers">Warehouse Address</h4>
        <p className="warehouse__info-address">{this.state.selectedWarehouse.address}, {this.state.selectedWarehouse.city}, {this.state.selectedWarehouse.country}</p>
        <div className="header__info-contact">
          <div>
            <h5 className="warehouse__info-headers">CONTACT NAME</h5>
            <p className="warehouse__info-name">{this.state.selectedWarehouse.contact.name}</p>
            <p className="warehouse__info-name">{this.state.selectedWarehouse.contact.position}</p>
          </div>
          <div>
            <h5 className="warehouse__info-headers">CONTACT INFORMATION</h5>
            <p className="warehouse__info-phone">{this.state.selectedWarehouse.contact.phone}</p>
            <p className="warehouse__info-email">{this.state.selectedWarehouse.contact.email}</p>
          </div>
        </div>
      </section>
    </main>
  )}
}

export default Warehouse