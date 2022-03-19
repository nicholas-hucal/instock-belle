import './InventoryList.scss';
import InventoryItem from '../InventoryItem/InventoryItem';

export default function InventoryList ({displayList, showModal}) {
    return (
        <>
            {displayList.map ((inventory) => 
                <InventoryItem 
                    key={inventory.id}
                    id={inventory.id}
                    warehouseID={inventory.warehouseID}
                    warehouseName={inventory.warehouseName}
                    itemName={inventory.itemName}
                    description={inventory.description}
                    category={inventory.category}
                    status={inventory.status}
                    quantity={inventory.quantity}
                    showModal={showModal}
                />
            )}
        </>
    )
}