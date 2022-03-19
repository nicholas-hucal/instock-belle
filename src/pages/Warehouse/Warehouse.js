import './Warehouse.scss';
import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import api from "../../utils/api.js";
import WarehouseInvList from "../../components/WarehouseInvList/WarehouseInvList.js"

class Warehouse extends React.Component{

  state = {
    selectedWarehouse: {},
    inventoryContent: []
  }

  
  getSelectedWarehouse = (warehouseId) => {
    api.getWarehouseById(warehouseId)
    .then((res) => {
      this.setState({
        selectedWarehouse: res.data
      })
      // this.getInventory(warehouseId || res.data[0].id)
      // console.log(res.data.contact.email)
    })
  }

  getInventory = (warehouseId) => {
    api.inventoryContent(warehouseId)
    .then((res) => {
      console.log(res.data)
      this.setState({
        inventoryContent: res.data.inventories
      })
    })
  }
  
  componentDidMount(){
    this.getSelectedWarehouse(this.props.match.params.warehouseId);
    // console.log(this.props.match.params.warehouseId)
    this.getInventory(this.props.match.params.warehouseId)
    
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.id !== this.props.match.params.WarehouseId){
      this.getInventory(this.props.match.params.WarehouseId || this.state.selectedWarehouse[0].WarehouseId)
    }
  }


  render(){
    const {name, address, country, city, contact} = this.state.selectedWarehouse;
    return (
    <main className='warehouse'>
      <section className="warehouse__header">
        <Link to="/">
          <img src={arrow} className="warehouse__header-icons" />
        </Link>
        <h2 className="warehouse__header-text">{name}</h2>
        <Link to="/" className="warehouse__header-bg"></Link>
      </section>
      <section className="warehouse__info">
        <h4 className="warehouse__info-headers">Warehouse Address:</h4>
        <p className="warehouse__info-text">{address}, {city}, {country}</p>
        <div className="warehouse__info-contact">
          <div>
            <h4 className="warehouse__info-headers">CONTACT NAME:</h4>
            <p className="warehouse__info-text">{contact && contact.name}</p>
            <p className="warehouse__info-text">{contact && contact.position}</p>
          </div>
          <div>
            <h4 className="warehouse__info-headers">CONTACT INFORMATION:</h4>
            <p className="warehouse__info-text">{contact && contact.phone}</p>
            <p className="warehouse__info-text">{contact && contact.email}</p>
          </div>
        </div>
      </section>
      <WarehouseInvList list={this.state.inventoryContent} />
    </main>
  )}
}

export default Warehouse