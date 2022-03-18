import WarehouseForm from '../../components/WarehouseForm/WarehouseForm.js';

const WarehouseEdit = ({history, match}) => {
    return (
        <section>
            <WarehouseForm title="Edit Warehouse" submitText="save" history={history} match={match}  />
        </section>
    );
}

export default WarehouseEdit