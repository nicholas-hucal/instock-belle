import InventoryForm from '../../components/InventoryForm/InventoryForm.js';

const InventoryAdd = ({history, match}) => {
    return (
        <section>
            <InventoryForm title="Add New Inventory Item" submitText="Save" history={history} match={match}  />
        </section>
    );
}

export default InventoryAdd