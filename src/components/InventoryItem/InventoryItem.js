import './InventoryItem.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';

export default function InventoryItem({ id, itemName, category, status, quantity, warehouseName }) {
    return (
        <div className="inventory__item">
            <div className="inventory__text-box">
                <div className="inventory__column--left">
                    <div className="inventory__content inventory__content--short">
                        <h3 className="inventory__mobile-header">INVENTORY ITEM</h3>
                        <Link to={`/inventory/${id}`} className="link">{itemName}</Link>
                    </div>
                    <div className="inventory__content inventory__content--shortest">
                        <h3 className="inventory__mobile-header">CATEGORY</h3>
                        <p>{category}</p>
                    </div>
                    <div id='appear' className="inventory__content inventory__content--shortest">
                        <h3 className="inventory__mobile-header">STATUS</h3>
                        <p>{status}</p>
                    </div>
                </div>
                <div className="inventory__column--right">
                    <div id='vanish' className="inventory__content inventory__content--shortest">
                        <h3 className="inventory__mobile-header">STATUS</h3>
                        <p>{status}</p>
                    </div>
                    <div className="inventory__content inventory__content--shortest">
                        <h3 className="inventory__mobile-header">QTY</h3>
                        <p>{quantity}</p>
                    </div>
                    <div className="inventory__content inventory__content--shorter">
                        <h3 className="inventory__mobile-header">WAREHOUSE</h3>
                        <p>{warehouseName}</p>
                    </div>
                </div>
            </div>
            <div className="inventory__action">
                <img src={deleteIcon} alt='delete icon' className="inventory__icon" />
                <Link to={`/inventory/${id}/edit`} className="inventory__link"><img src={editIcon} alt='edit icon' className="inventory__icon" /></Link>
            </div>
        </div>
    );
};