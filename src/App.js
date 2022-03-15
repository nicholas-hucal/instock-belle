import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Warehouses from './pages/Warehouses/Warehouses.js';
import Warehouse from './pages/Warehouse/Warehouse.js';
import Inventory from './pages/Inventory/Inventory.js';
import NotFound from './pages/NotFound/NotFound.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Warehouses} />
        <Route path="/:warehouseId" component={Warehouse} />
        <Route path="/:warehouseId/edit" component={Warehouse} />
        <Route path="/add" component={Warehouse} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/inventory/:inventoryId" component={Inventory} />
        <Route path="/inventory/:inventoryId/edit" component={Inventory} />
        <Route path="/inventory/add" component={Inventory} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
