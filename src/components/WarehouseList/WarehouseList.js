/**
 * Component: List of warehouses
 * @props array of warehouse objects
 */

import './WarehouseList.scss';
import { Link } from 'react-router-dom';
import WarehouseItem from '../WarehouseItem/WarehouseItem';
 
function WarehouseList ({displayList}) {
     return (
        <>
            {displayList.map ((warehouse) =>
                <Link to={`/warehouse/${warehouse.id}`}>
                    <WarehouseItem
                        key={warehouse.id}
                        warehouse={warehouse.warehouse}
                        title={warehouse.address}
                        channel={warehouse.name}
                        image={video.info}
                    />
                </Link>
            )}
        </>
    );
};
 
export default WarehouseList;