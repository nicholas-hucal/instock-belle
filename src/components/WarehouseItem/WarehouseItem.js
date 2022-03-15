/**
 * Component: Individual warehouse card with minimum information
 * @props ...
 */

import './WarehouseItem.scss';

function WarehouseItem ({ warehouse, address, name, info}) {
    return (
        <div className="warehouse__item">
            <p className="warehouse__header warehouse__header--individual">Warehouse</p>
            <p className="warehouse__header warehouse__header--individual">Address</p>
            <p className="warehouse__header warehouse__header--individual">Contact Name</p>
            <p className="warehouse__header warehouse__header--individual">Contact Information</p>
            <p className="warehouse__header warehouse__header--individual">Actions</p>
        </div>
    );
};

export default WarehouseItem;
 