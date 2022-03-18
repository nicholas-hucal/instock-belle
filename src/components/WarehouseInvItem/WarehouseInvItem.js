import './WarehouseInvItem.scss';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import ChevronLink from '../ChevronLink/ChevronLink.js';

function WarehouseInvItem ({}) {
    return (
        <div className="warehouses__item">
            <div className="warehouses__text-box">
                <div className="warehouses__column">
                    <div className="warehouses__content warehouses__content--short">
                        <h3 className="warehouses__mobile-header">INVENTORY ITEM</h3>
                        {/* <ChevronLink link={`/${id}`} text={name}/> */}
                    </div>
                    <div className="warehouses__content warehouses__content--long">
                        <h3 className="warehouses__mobile-header">CATEGORY</h3>
                        <p>categoryINFO</p>
                    </div>
                </div>
                <div className="warehouses__column">
                    <div className="warehouses__content warehouses__content--short">
                        <h3 className="warehouses__mobile-header">STATUS</h3>
                        <p>status info</p>
                    </div>
                    <div className="warehouses__content warehouses__content--long">
                        <h3 className="warehouses__mobile-header">QTY</h3>
                        <p>QTY number</p>
                    </div>
                </div>
            </div>
            <div className="warehouses__action">
                <img src={deleteIcon} alt='delete icon' className="warehouses__icon" onClick={() => selectWarehouse(id)}/>
                <Link to={`/${id}/edit`} className="warehouses__link"><img src={editIcon} alt='edit icon' className="warehouses__icon"/></Link>
            </div>
        </div>
    );
};

export default WarehouseInvItem;