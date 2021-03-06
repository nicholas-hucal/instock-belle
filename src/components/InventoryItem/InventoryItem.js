import './InventoryItem.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';
import ChevronLink from '../ChevronLink/ChevronLink.js';


export default function InventoryItem({ id, itemName, category, status, quantity, warehouseName, showModal }) {

    return (
        <div className="inventory__item">
            <div className="inventory__text-box">
                <div className="inventory__column--left">
                    <div className="inventory__content--1">
                        <h3 className="inventory__mobile-header">INVENTORY ITEM</h3>
                        <ChevronLink link={`/inventory/${id}`} text={itemName}/>
                    </div>
                    <div className="inventory__content--2">
                        <h3 className="inventory__mobile-header">CATEGORY</h3>
                        <p>{category}</p>
                    </div>
                    <div id='appear' className="inventory__content--3">
                        <h3 className="inventory__mobile-header">STATUS</h3>
                        <p className={ status === "In Stock" ? "inStock" : "outStock"}>{status}</p>
                    </div>
                </div>
                <div className='inventory__column--right'>
                    <div id='vanish' className="inventory__content">
                        <h3 className="inventory__mobile-header">STATUS</h3>
                        <p className={ status === "In Stock" ? "inStock" : "outStock"}>{status}</p>
                    </div>
                    <div className="inventory__content--4">
                        <h3 className="inventory__mobile-header">QTY</h3>
                        <p>{quantity}</p>
                    </div>
                    <div className="inventory__content--5">
                        <h3 className="inventory__mobile-header inventory__mobile-header--last">WAREHOUSE</h3>
                        <p>{warehouseName}</p>
                    </div>
                </div>
            </div>
            <div className="inventory__action">
                <button className='inventory__delete' onClick={() => { showModal({ id: id, name: itemName }) }}>
                    <img src={deleteIcon} alt='delete icon' className="inventory__icon" />
                </button>
                <Link to={`/inventory/${id}/edit`} className="inventory__link"><img src={editIcon} alt='edit icon' className="inventory__icon" /></Link>
            </div>
        </div>
    );
};