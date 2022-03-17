import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Warehouses from './pages/Warehouses/Warehouses.js';
import Header from './components/Header/Header'
import Warehouse from './pages/Warehouse/Warehouse.js';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd.js';
import Inventory from './pages/Inventory/Inventory.js';
import NotFound from './pages/NotFound/NotFound.js';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main className="main">
      <section  className="main__content">
      <Switch>
        <Route path="/inventory" component={Inventory} />
        <Route path="/inventory/:inventoryId" component={Inventory} />
        <Route path="/inventory/:inventoryId/edit" component={Inventory} />
        <Route path="/inventory/add" component={Inventory} />
        <Route path="/add" render={routerProps => <WarehouseAdd {...routerProps} />} />
        <Route path="/:warehouseId" component={Warehouse} />
        <Route path="/:warehouseId/edit" component={Warehouse} />
        <Route path="/" exact component={Warehouses} />
        <Route component={NotFound} />
      </Switch>
      </section>
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
