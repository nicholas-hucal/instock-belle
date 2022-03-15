import './Home.scss';
import axios from 'axios';
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { Component } from 'react';

class Warehouses extends Component {

    state = {displayedWarehouses: []};

    componentDidMount() {
        this.updateList();
    };

    updateList = () => {
        axios
            .get(`/warehouse`)
            .then((response) => {
                this.setState({displayedWarehouses: response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // onDeleteWarehouse = (warehouseId) => {
    //     axios
    //         .delete(`/warehouses/${warehouseId}?api_key=${API_KEY}`)
    //         .then(() => {
    //             this.updateList();
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    render () {
        return (
            <div className='warehouses'>
                <div className='warehouses__nav'>
                    <h1>Warehouses</h1>
                    <div>
                        <p>search</p>
                        <p>button</p>
                    </div>
                </div>
                <div className="warehouses__headers">
                    <p className="warehouses__header">Warehouse</p>
                    <p className="warehouses__header">Address</p>
                    <p className="warehouses__header">Contact Name</p>
                    <p className="warehouses__header">Contact Information</p>
                    <p className="warehouses__header">Actions</p>
                </div>
                <div className='warehouses__list'>
                    <WarehouseList displayList={this.state.displayedWarehouses} />
                </div>
            </div>
        );
    };
};

export default Warehouses;