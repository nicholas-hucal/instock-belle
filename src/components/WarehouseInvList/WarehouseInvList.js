import './WarehouseInvList.scss';
import WarehouseInvItem from '../WarehouseInvItem/WarehouseInvItem';
import sortIcon from '../../assets/icons/sort-24px.svg';
 
function WarehouseInvList ({list, warehouseId, getInventory, inventorySort}) {
     return (
        <main className="invList">
            <div className="invList__headers">
                <div className="invList__header invList__header--short" onClick={() => inventorySort("itemName")}>
                    <h3>INVENTORY ITEM</h3>
                    <img src={sortIcon} alt='sort by inventory item' className="invList__sort"/>
                </div>
                <div className="invList__header invList__header--long" onClick={() => inventorySort("category")}>
                    <h3>CATEGORY</h3>
                    <img src={sortIcon} alt='sort by category' className="invList__sort"/>
                </div>
                <div className="invList__header invList__header--short" onClick={() => inventorySort("status")}>
                    <h3>STATUS</h3>
                    <img src={sortIcon} alt='sort by status' className="invList__sort"/>
                </div>
                <div className="invList__header invList__header--long" onClick={() => inventorySort("quantity")}>
                    <h3>QUANTITY</h3>
                    <img src={sortIcon} alt='sort by Contact Information' className="invList__sort"/>
                </div>
                <h3 className="invList__header invList__header--action">Actions</h3>
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