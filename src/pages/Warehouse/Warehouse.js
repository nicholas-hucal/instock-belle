import './Warehouse.scss';
import React from 'react';
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";
import api from "../../utils/api.js";
import WarehouseInvList from "../../components/WarehouseInvList/WarehouseInvList.js"

class Warehouse extends React.Component {

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
      })
  }

  getInventory = (warehouseId) => {
    api.inventoryContent(warehouseId)
      .then((res) => {
        this.setState({
          inventoryContent: res.data.inventories
        })
      })
  }

  inventorySort = (key) => {
    const displayedList = this.state.inventoryContent;
    const isOrded = displayedList[0]?.[key] < displayedList[displayedList.length - 1]?.[key];
    let newList;
    if (typeof displayedList[0]?.[key] === "string") {
        newList = displayedList.sort((a, b) => {
            const nameA = a[key].toString().toUpperCase();
            const nameB = b[key].toString().toUpperCase();
            if (nameA < nameB) {
            return isOrded ? 1 : -1;
            }
            if (nameA > nameB) {
            return isOrded ? -1 : 1;
            }
            return 0;
        });
    } else {
        newList = displayedList.sort((a, b) => {
          if (isOrded) {
            return b[key] - a[key]
          } else {
            return a[key] - b[key]
          }
        });
    }
    this.setState({inventoryContent: newList})
};

  componentDidMount() {
    this.getSelectedWarehouse(this.props.match.params.warehouseId);
    this.getInventory(this.props.match.params.warehouseId)

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.WarehouseId) {
      this.getInventory(this.props.match.params.WarehouseId || this.state.selectedWarehouse[0].WarehouseId)
    }
  }


  render() {
    const { name, address, country, city, contact, id } = this.state.selectedWarehouse;
    return (
      <main className='warehouse'>
        <section className="warehouse__header">
          <div className='warehouse__header-container'>
            <Link to="/">
              <img src={arrow} alt="go back" className="warehouse__header-icons" />
            </Link>
            <h2 className="warehouse__header-text">{name}</h2>
          </div>
          <Link to={`/warehouse/${id}/edit`} className="warehouse__header-bg">
            <img src={editPen} className='warehouse__header-edit-image' alt="edit this warehouse" />
            <span className='warehouse__header-edit-text'>Edit</span>
          </Link>
        </section>
        <section className="warehouse__info">
          <div className='warehouse__info-address'>
            <h4 className="warehouse__info-headers">Warehouse Address:</h4>
            <p className="warehouse__info-text">{address}, {city}, {country}</p>
          </div>
          <div className="warehouse__info-contact">
            <div className='warehouse__info-column warehouse__info-column--left'>
              <h4 className="warehouse__info-headers">CONTACT NAME:</h4>
              <p className="warehouse__info-text">{contact && contact.name}</p>
              <p className="warehouse__info-text">{contact && contact.position}</p>
            </div>
            <div className='warehouse__info-column warehouse__info-column--right'>
              <h4 className="warehouse__info-headers">CONTACT INFORMATION:</h4>
              <p className="warehouse__info-text">{contact && contact.phone}</p>
              <p className="warehouse__info-text">{contact && contact.email}</p>
            </div>
          </div>
        </section>
        <WarehouseInvList warehouseId={id} getInventory={this.getInventory} list={this.state.inventoryContent} inventorySort={this.inventorySort}/>
        {!this.state.inventoryContent.length && 
          <p className="warehouse__notice">There are currently no inventory items in this warehouse</p>
        }
      </main>
    )
  }
}

export default Warehouse