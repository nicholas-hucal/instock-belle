import './Inventory.scss';
import axios from 'axios';
import Button from '../../components/Button/Button';
import SearchBox from '../../components/SearchBox/SearchBox';
import { Component } from 'react';
import InventoryList from '../../components/InventoryList/InventoryList';
import sortLogo from '../../assets/icons/sort-24px.svg';
import InventoryModal from '../../components/InventoryModal/InventoryModal';
import { Link } from 'react-router-dom';
import api from '../../utils/api';


export default class Inventory extends Component {

  state = {
    displayedInventory: [],
    displayModal: false,
    deleteItem: {},
  };

  showModal = (item) => {
    this.setState({ 
      displayModal: true,
      deleteItem: item, 
    });
  };

  hideModal = () => {
    this.setState({ displayModal: false, deleteItem: {}});
  };

  componentDidMount() {
    this.updateList();
  };

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

  deleteOne = () => {
    axios
        .delete(`http://localhost:8080/inventory/${this.state.deleteItem.id}`)
        .then(() => {
            this.updateList();
            this.hideModal();
        })
        .catch((err) => {
            console.log(err);
            this.hideModal();
        });
  };

  doSearch = (event) => {
    const search = event.target.value;
    api
      .doSearch({ search: search, type: 'inventory' })
      .then(response => {
        console.log(response.data)
        this.setState({ displayedInventory: response.data });
      })
      .catch(error => {
        console.log(error)
      })
  };

  doSort = (key) => {
    const displayedList = this.state.displayedInventory;
    const isOrded = displayedList[0]?.[key] < displayedList[displayedList.length -1]?.[key];
    let newList;
    if (typeof key === "string") {
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
        newList = displayedList.sort( (a, b) => a[key] - a[key]);
    }
    this.setState({displayedInventory: newList})
};

  render = () => {
    return (
      <div className='inventory'>
        <div className='inventory__nav'>
          <h1>Inventory</h1>
          <div className='inventory__form'>
            <SearchBox doSearch={this.doSearch} />
            <Link to='/inventory/add'>
              <Button text="+ Add New Item" />
            </Link>
          </div>
        </div>
        <ul className="inventory__headers">
          <li className='inventory__header' onClick={()=>this.doSort("itemName")}>
            <h3 className="inventory__header">Inventory Item</h3>
            <img src={sortLogo} alt="sorting logo" />
          </li>
          <li className='inventory__header' onClick={()=>this.doSort("category")}>
            <h3 className="inventory__header">Category</h3>
            <img src={sortLogo} alt="sorting logo" />
          </li>
          <li className='inventory__header' onClick={()=>this.doSort("status")}>
            <h3 className="inventory__header">Status</h3>
            <img src={sortLogo} alt="sorting logo" />
          </li>
          <li className='inventory__header' onClick={()=>this.doSort("quantity")}>
            <h3 className="inventory__header">Qty</h3>
            <img src={sortLogo} alt="sorting logo" />
          </li>
          <li className='inventory__header' onClick={()=>this.doSort("warehouseName")}>
            <h3 className="inventory__header">Warehouse</h3>
            <img src={sortLogo} alt="sorting logo" />
          </li>
          <li className='inventory__header'>
            <h3 className="inventory__header">Actions</h3>
          </li>
        </ul>
        <div className='inventory__list'>
          <InventoryList displayList={this.state.displayedInventory} showModal={this.showModal} />
        </div>
        {this.state.displayModal &&
          <InventoryModal hideModal={this.hideModal} delete={this.deleteOne} name={this.state.deleteItem.name} />
        }
      </div>
    )
  }

}