import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Warehouses from './pages/Warehouses/Warehouses.js';
import Header from './components/Header/Header'
import Warehouse from './pages/Warehouse/Warehouse.js';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd.js';
import WarehouseEdit from './pages/WarehouseEdit/WarehouseEdit.js';
import InventoryAdd from './pages/InventoryAdd/InventoryAdd.js';
import InventoryEdit from './pages/InventoryEdit/InventoryEdit.js';
import Inventory from './pages/Inventory/Inventory.js';
import NotFound from './pages/NotFound/NotFound.js';
import Footer from './components/Footer/Footer'
import InventoryItemDetails from './pages/InventoryItemDetails/InventoryItemDetails';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main className="main">
      <section  className="main__content">
      <Switch>
        <Route path="/inventory" exact component={Inventory} />
        <Route path="/inventory/add" exact component={InventoryAdd} />
        <Route path="/inventory/:inventoryId/edit" component={InventoryEdit} />
        <Route path="/inventory/:inventoryId" component={InventoryItemDetails} />
        <Route path="/warehouse/add" component={WarehouseAdd}/>
        <Route path="/warehouse/:warehouseId/edit" component={WarehouseEdit} />
        <Route path="/warehouse/:warehouseId" component={Warehouse} />
        <Route path="/warehouse" component={Warehouses} />
        <Route path="/" exact>
          <Redirect to="/warehouse" />
        </Route>
        <Route component={NotFound} />
      </Switch>
      </section>
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
