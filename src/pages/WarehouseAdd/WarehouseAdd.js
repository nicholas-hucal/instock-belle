import WarehouseForm from '../../components/WarehouseForm/WarehouseForm.js';

const WarehouseAdd = ({history, match}) => {
    return (
        <section>
            <WarehouseForm title="Add New Warehouse" submitText="+ Add Warehouse" history={history} match={match}  />
        </section>
    );
}

export default WarehouseAdd