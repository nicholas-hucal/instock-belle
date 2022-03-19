import './Warehouses.scss';
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import Button from "../../components/Button/Button";
import SearchBox from "../../components/SearchBox/SearchBox";
import WarehouseModal from '../../components/WarehouseModal/WarehouseModal';
import sortIcon from '../../assets/icons/sort-24px.svg';
import api from '../../utils/api';
import { Component } from 'react';

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
        api
            .getAllWarehouses()
            .then((response) => {
                this.setState({displayedWarehouses: response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    deleteOne = () => {
        api
            .deleteWarehouseById(this.state.clickedWarehouseId)
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
                this.setState({displayedWarehouses: response.data});
            })
            .catch(error => {
                console.log(error)
            })
    };

    doSort = (key) => {
        const isOrded = this.state.displayedWarehouses[0]?.[key] < this.state.displayedWarehouses[1]?.[key];
        const newList = this.state.displayedWarehouses.sort((a, b) => {
            const nameA = a[key].toUpperCase();
            const nameB = b[key].toUpperCase();
            if (nameA < nameB) {
              return isOrded ? 1 : -1;
            }
            if (nameA > nameB) {
              return isOrded ? -1 : 1;
            }
            return 0;
        });
        this.setState({displayedWarehouses: newList})
    };

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
                    <div className="warehouses__header warehouses__header--short" onClick={()=>this.doSort("name")}>
                        <h3>Warehouse</h3>
                        <img src={sortIcon} alt='sort by Warehouse'/>
                    </div>
                    <div className="warehouses__header warehouses__header--long" onClick={()=>this.doSort("address")}>
                        <h3>Address</h3>
                        <img src={sortIcon} alt='sort by Address'/>
                    </div>
                    <div className="warehouses__header warehouses__header--short" onClick={()=>this.doSort("contactName")}>
                        <h3>Contact Name</h3>
                        <img src={sortIcon} alt='sort by Contact Name'/>
                    </div>
                    <div className="warehouses__header warehouses__header--long" onClick={()=>this.doSort("contactEmail")}>
                        <h3>Contact Information</h3>
                        <img src={sortIcon} alt='sort by Contact Information'/>
                    </div>
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