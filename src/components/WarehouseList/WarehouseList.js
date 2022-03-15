/**
 * Component: List of warehouses
 * @props array of warehouse objects
 */

import './WarehouseList.scss';
import WarehouseItem from '../WarehouseItem/WarehouseItem';
 
function WarehouseList ({displayList}) {
     return (
        <>
            {displayList.map ((warehouse) =>
                <WarehouseItem
                    key={warehouse.id}
                    id={warehouse.id}
                    name={warehouse.name}
                    address={warehouse.address}
                    contactName={warehouse.contactName}
                    contactPhone={warehouse.contactPhone}
                    contactEmail={warehouse.contactEmail}
                />
            )}
        </>
    );
};
 
export default WarehouseList;