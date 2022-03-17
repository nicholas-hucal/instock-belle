import './Inventory.scss';
import axios from 'axios';
import Button from '../../components/Button/Button';
import SearchBox from '../../components/SearchBox/SearchBox';
import { Component } from 'react';
import InventoryList from '../../components/InventoryList/InventoryList'


export default class Inventory extends Component {

  state = { displayedInventory: [] };

  componentDidMount() {
    this.updateList();
  };
  
  //*Figure out a way to add warehouse ID to get request.

  updateList = () => {
    axios
      .get("http://localhost:8080/inventory")
      .then((response) => {
        this.setState({ displayedInventory: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render = () => {
    return (
      <div className='Inventory'>
        <div className='Inventory__nav'>
          <h1>Inventory</h1>
          <div className='Inventory__form'>
            <SearchBox />
            <Button text="+ Add New Item" />
          </div>
        </div>
        <div className="Inventory__headers">
          <h3 className="Inventory__header Inventory__header--short">Warehouse</h3>
          <h3 className="Inventory__header Inventory__header--long">Address</h3>
          <h3 className="Inventory__header Inventory__header--short">Contact Name</h3>
          <h3 className="Inventory__header Inventory__header--long">Contact Information</h3>
          <h3 className="Inventory__header Inventory__header--action">Actions</h3>
        </div>
        <div className='Inventory__list'>
          <InventoryList displayList={this.state.displayedInventory} />
        </div>
      </div>
    )
  }

}