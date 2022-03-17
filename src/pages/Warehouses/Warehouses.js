import './Warehouses.scss';
import axios from 'axios';
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Component } from 'react';
import WarehouseModal from '../../components/WarehouseModal/WarehouseModal';
import api from '../../utils/api';

class Warehouses extends Component {

    state = {
        displayedWarehouses: [],
        displayModal: false,
        clickedWarehouseId: ''
    };

    showModal = () => {
        this.setState({ displayModal: true });
    };

    hideModal = () => {
        this.setState({ displayModal: false });
    };

    selectWarehouse = (selectedWarehouseId) => {
        this.setState(
            {clickedWarehouseId: selectedWarehouseId},
            this.showModal()
        );
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

    deleteOne = () => {
        axios
            .delete(`http://localhost:8080/${this.state.clickedWarehouseId}`)
            .then(() => {
                this.updateList();
                this.hideModal();
            })
            .catch((err) => {
                console.log(err);
                this.hideModal();
            });
    };

    doSearch = (event) => {
        const search = event.target.value;
        
        api
            .doSearch({search: search, type: 'warehouse'})
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.updateList();
    };

    render () {
        return (
            <div className='warehouses'>
                <div className='warehouses__nav'>
                    <h1>Warehouses</h1>
                    <div className='warehouses__form'>
                        <SearchBox doSearch={this.doSearch}/>
                        <Button text="+ Add New Warehouse" onClick={() => this.props.history.push('/add')}/>
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
                    <WarehouseList displayList={this.state.displayedWarehouses} selectWarehouse={this.selectWarehouse}/>
                </div>
                {this.state.displayModal && 
                    <WarehouseModal hideModal={this.hideModal} delete={this.deleteOne}/>
                }
            </div>
        );
    };
};

export default Warehouses;