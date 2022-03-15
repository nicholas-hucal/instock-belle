/**
 * Component: Individual warehouse card with minimum information
 * @props ...
 */

import './WarehouseItem.scss';
import { Link } from 'react-router-dom';

function WarehouseItem ({ id, name, address, contactName, contactPhone, contactEmail}) {
    return (
        <div className="warehouse__item">
            <p className="warehouse__header warehouse__header--individual">Warehouse</p>
            <Link to={`/warehouse/${id}`}>{name}</Link>
            <p className="warehouse__header warehouse__header--individual">Address</p>
            <p>{address}</p>
            <p className="warehouse__header warehouse__header--individual">Contact Name</p>
            <p>{contactName}</p>
            <p className="warehouse__header warehouse__header--individual">Contact Information</p>
            <p>{contactPhone}</p>
            <p>{contactEmail}</p>
            <p className="warehouse__header warehouse__header--individual">Actions</p>
        </div>
    );
};

export default WarehouseItem;
 