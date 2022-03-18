import './Inventory.scss';
import axios from 'axios';
import Button from '../../components/Button/Button';
import SearchBox from '../../components/SearchBox/SearchBox';
import { Component } from 'react';
import InventoryList from '../../components/InventoryList/InventoryList';
import sortLogo from '../../assets/icons/sort-24px.svg';


export default class Inventory extends Component {

  state = { displayedInventory: [] };

  componentDidMount() {
    this.updateList();
  };

  updateList = () => {
    axios
      .get("http://localhost:8080/inventory")
      .then((response) => {
        console.log(response.data)
        this.setState({ displayedInventory: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // doSearch = (event) => {
  //   const search = event.target.value;
  //   api
  //     .doSearch({ search: search, type: 'inventory' })
  //     .then(response => {
  //       console.log(response.data)
  //       this.setState({ displayedInventory: response.data });
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // };

  render = () => {
    return (
      <div className='inventory'>
        <div className='inventory__nav'>
          <h1>Inventory</h1>
          <div className='inventory__form'>
            <SearchBox doSearch={this.doSearch} />
            <Button text="+ Add New Item" />
          </div>
        </div>
        <div className="inventory__headers">
          <div className='inventory__header--long'>
            <h3 className="inventory__header">Inventory Item</h3>
            <img src={sortLogo} alt="sorting logo" />
          </div>
          <div className='inventory__header--mid'>
            <h3 className="inventory__header">Category</h3>
            <img src={sortLogo} alt="sorting logo" />
          </div>
          <div className='inventory__header--short'>
            <h3 className="inventory__header">Status</h3>
            <img src={sortLogo} alt="sorting logo" />
          </div>
          <div className='inventory__header--shorter'>
            <h3 className="inventory__header">Qty</h3>
            <img src={sortLogo} alt="sorting logo" />
          </div>
          <div className='inventory__header--mid'>
            <h3 className="inventory__header">Warehouse</h3>
            <img src={sortLogo} alt="sorting logo" />
          </div>
          <div className='inventory__header--action'>
            <h3 className="inventory__header">Actions</h3>
          </div>
        </div>
        <div className='inventory__list'>
          <InventoryList displayList={this.state.displayedInventory} />
        </div>
      </div>
    )
  }

}