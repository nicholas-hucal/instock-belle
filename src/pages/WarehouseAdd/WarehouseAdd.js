import WarehouseForm from '../../components/WarehouseForm/WarehouseForm.js';

const WarehouseAdd = ({history}) => {
    return (
        <div>
            <WarehouseForm history={history} title="Add New Warehouse" submitText="+ Add Warehouse" />
        </div>
    );
}

export default WarehouseAdd