/**
 * Component: Individual warehouse card with minimum information
 * @props ...
 */

import './WarehouseItem.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';

function WarehouseItem ({ id, name, address, contactName, contactPhone, contactEmail}) {
    return (
        <div className="warehouses__item">
            <div className="warehouses__text-box">
                <div className="warehouses__column">
                    <div className="warehouses__content warehouses__content--short">
                        <h3 className="warehouses__mobile-header">Warehouse</h3>
                        <Link to={`/warehouse/${id}`} className="link">{name}</Link>
                    </div>
                    <div className="warehouses__content warehouses__content--long">
                        <h3 className="warehouses__mobile-header">Address</h3>
                        <p>{address}</p>
                    </div>
                </div>
                <div className="warehouses__column">
                    <div className="warehouses__content warehouses__content--short">
                        <h3 className="warehouses__mobile-header">Contact Name</h3>
                        <p>{contactName}</p>
                    </div>
                    <div className="warehouses__content warehouses__content--long">
                        <h3 className="warehouses__mobile-header">Contact Information</h3>
                        <p>{contactPhone}</p>
                        <p>{contactEmail}</p>
                    </div>
                </div>
            </div>
            <div className="warehouses__action">
                <img src={deleteIcon} alt='delete icon' className="warehouses__icon"/>
                <Link to={`/warehouse/${id}/edit`} className="warehouses__link"><img src={editIcon} alt='edit icon' className="warehouses__icon"/></Link>
            </div>
        </div>
    );
};

export default WarehouseItem;
 