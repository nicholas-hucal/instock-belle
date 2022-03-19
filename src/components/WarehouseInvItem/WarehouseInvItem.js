import './WarehouseInvItem.scss';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import ChevronLink from '../ChevronLink/ChevronLink.js';

function WarehouseInvItem ({name, category, id, status, qty}) {
    return (
        <div className="inventory__item">
            <div className="inventory__text-box">
                <div className="inventory__column">
                    <div className="inventory__content inventory__content--short">
                        <h3 className="inventory__mobile-header">INVENTORY ITEM</h3>
                        <ChevronLink link={`/${id}`} text={name}/>
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
                <img src={deleteIcon} alt='delete icon' className="inventory__icon"/>
                <Link to={`/edit`} className="inventory__link"><img src={editIcon} alt='edit icon' className="inventory__icon"/></Link>
            </div>
        </div>
    );
};

export default WarehouseInvItem;