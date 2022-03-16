import './Warehouses.scss';
import axios from 'axios';
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Component } from 'react';

class Warehouses extends Component {

    state = {displayedWarehouses: []};

    componentDidMount() {
        this.updateList();
    };

    updateList = () => {
        axios
            .get("http://localhost:8080/warehouse")
            .then((response) => {
                this.setState({displayedWarehouses: response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render () {
        return (
            <div className='warehouses'>
                <div className='warehouses__nav'>
                    <h1>Warehouses</h1>
                    <div className='warehouses__form'>
                        <SearchBox />
                        <Button />
                    </div>
                </div>
                <div className="warehouses__headers">
                    <h3 className="warehouses__header warehouses__header--short">Warehouse</h3>
                    <h3 className="warehouses__header warehouses__header--long">Address</h3>
                    <h3 className="warehouses__header warehouses__header--short">Contact Name</h3>
                    <h3 className="warehouses__header warehouses__header--long">Contact Information</h3>
                    <h3 className="warehouses__header warehouses__header--action">Actions</h3>
                </div>
                <div className='warehouses__list'>
                    <WarehouseList displayList={this.state.displayedWarehouses} />
                </div>
            </div>
        );
    };
};

export default Warehouses;