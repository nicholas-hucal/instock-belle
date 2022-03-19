import './WarehouseInvItem.scss';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import ChevronLink from '../ChevronLink/ChevronLink.js';
import InventoryModal from '../InventoryModal/InventoryModal.jsx';
import {Component} from 'react';
import axios from 'axios';

class WarehouseInvItem extends Component {

    state = {
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

    deleteOne = () => {
    axios
        .delete(`http://localhost:8080/inventory/${this.state.deleteItem.id}`)
        .then(() => {
            this.hideModal();
            this.props.getInventory(this.props.warehouseId)
        })
        .catch((err) => {
            console.log(err);
            this.hideModal();
        });
    };
  componentDidMount(){
    this.setState({
        deleteItem: {
            name: this.props.name,
            id: this.props.id
        }
    })
  }

    render(){
        const {name, category, id, status, qty} = this.props
    return (
        <div className="inventory__item">
            <div className="inventory__text-box">
                <div className="inventory__column">
                    <div className="inventory__content inventory__content--short">
                        <h3 className="inventory__mobile-header">INVENTORY ITEM</h3>
                        <ChevronLink link={`/inventory/${id}`} text={name}/>
                    </div>
                    <div className="inventory__content inventory__content--long">
                        <h3 className="inventory__mobile-header">CATEGORY</h3>
                        <p>{category}</p>
                    </div>
                </div>
                <div className="inventory__column">
                    <div className="inventory__content inventory__content--short">
                        <h3 className="inventory__mobile-header">STATUS</h3>
                        <p className={status === "In Stock" ? "inventory__inStock" : "inventory__outStock"}>{status}</p>
                    </div>
                    <div className="inventory__content inventory__content--long">
                        <h3 className="inventory__mobile-header">QTY</h3>
                        <p>{qty}</p>
                    </div>
                </div>
            </div>
            <div className="inventory__action">
                <img src={deleteIcon} alt='delete icon' className="inventory__icon" onClick={() => { this.showModal({ id: id, name: name }) }}/>
                <Link to={`/inventory/${id}/edit`} className="inventory__link"><img src={editIcon} alt='edit icon' className="inventory__icon"/></Link>
            </div>
            {this.state.displayModal &&
            <InventoryModal hideModal={this.hideModal} delete={this.deleteOne} name={this.state.deleteItem.name} />
        }
        </div>
    )};
};

export default WarehouseInvItem;