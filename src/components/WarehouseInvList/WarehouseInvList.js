import './WarehouseInvList.scss';
import WarehouseInvItem from '../WarehouseInvItem/WarehouseInvItem';
 
function WarehouseInvList ({list, warehouseId, getInventory}) {
     return (
        <main className="inventory">
        <div className="inventory__headers">
                <h3 className="inventory__header inventory__header--short">INVENTORY ITEM</h3>
                <h3 className="inventory__header inventory__header--long">CATEGORY</h3>
                <h3 className="inventory__header inventory__header--short">STATUS</h3>
                <h3 className="inventory__header inventory__header--long">QUANTITY</h3>
                <h3 className="inventory__header inventory__header--action">Actions</h3>
        </div>
            {list.map ((inventory) =>
                <WarehouseInvItem
                    getInventory={getInventory}
                    warehouseId={warehouseId} 
                    key={inventory.id}
                    id={inventory.id}
                    name={inventory.itemName}
                    category={inventory.category}
                    status={inventory.status}
                    qty={inventory.quantity}
                />
            )}
        </main>
    );
};
 
export default WarehouseInvList;