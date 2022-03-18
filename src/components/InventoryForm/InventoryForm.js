import React, { Component } from 'react';
import './InventoryForm.scss';
import back from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import Button from '../Button/Button';

class InventoryForm extends Component {

    state = {
        inputs: [],
        currentItem: '',
        requestError: false,
        warehouseList: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const inputs = [...this.state.inputs];
        const check = inputs.filter(input => input.valid !== true);

        console.log("uptodatefile")

        if (check.length !== 0) {
            inputs.forEach((field, idx) => {
                const e = {
                    target: {
                        value: field.value,
                        name: field.name,
                    }
                }
                this.handleInputChange(idx, e)
                console.log("in if")
            })
        } else {
            const data = {};
            inputs.forEach(field => {
                data[field.name] = field.value;
            })
            console.log(data);
            if (this.state.currentWarehouse) {
                axios
                    .put(`http://localhost:8080/inventory/${this.state.currentItem}`, data)
                    .then(response => {
                        this.props.history.push(`/${response.data.id}`);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {
                axios
                    .post(`http://localhost:8080/inventory/`, data)
                    .then(response => {
                        this.props.history.push(`/${response.data.id}`);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }

    handleInputChange = (idx, event) => {
        const target = event.target;
        let current = target.value;
        let error = '';
        let valid = this.state.inputs[idx].valid;
        let currentState = [...this.state.inputs];

        if (target.name === 'itemName' || target.name === 'description') {
            if (current.length < 3) {
                valid = false;
                error = 'inventory-form__field--error';
            } else {
                valid = true;
            }
        }

        if (target.name === "status") {
            if (current === "Out of Stock") {
                currentState[4].value = 0;
            }
        }

        if (target.name === "quantity") {
            current = Number(target.value)
            if (Number.isNaN(current)) {
                valid = false;
                error = 'inventory-form__field--error';
            } else if (current < 1) {
                valid = false;
                error = 'inventory-form__field--error';
            } else {
                valid = true;
            }
        }

        currentState[idx].value = current;
        currentState[idx].error = error;
        currentState[idx].valid = valid;

        this.setState({
            inputs: currentState
        });
    };

    goBack = (e) => {
        e.preventDefault();
        this.props.history.goBack()
    };

    formatResponseObject = (data) => {
        this.setState({
            inputs: [
                { name: 'itemName', value: data ? data.name : '', error: '', valid: data ? true : false },
                { name: 'description', value: data ? data.description : '', error: '', valid: data ? true : false },
                { name: 'category', value: data ? data.category : 'Electronics', error: '', valid: true },
                { name: 'status', value: data ? data.status : 'In Stock', error: '', valid: true },
                { name: 'quantity', value: data ? data.quantity : 1, error: '', valid: true },
                { name: 'warehouseName', value: data ? data.category : '', error: '', valid: true },
            ],
            currentItem: data ? data.id : '',
            requestError: false
        });
    };

    componentDidMount() {
        const id = this.props.match.params.inventoryId;
        if (id) {
            axios
                .get(`http://localhost:8080/inventory/${id}`)
                .then(response => {
                    this.formatResponseObject(response.data);
                })
                .catch(err => {
                    console.log(err)
                    this.setState({
                        requestError: true
                    })
                })
        } else {
            this.formatResponseObject(null)
        };
        axios
            .get(`http://localhost:8080/warehouse`)
            .then(response => {
                let list = response.data.map(warehouse => warehouse.name);
                this.setState({warehouseList: list});
                let currentState = [...this.state.inputs];
                currentState[5].value = list[0];
                this.setState({inputs: currentState});
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    requestError: true
                })
            })
    };

    render() {
        const { title, submitText } = this.props;
        const { inputs, requestError } = this.state;

        return (
            <section className='inventory-form'>
                <header className='inventory-form__header'>
                    <button className='inventory-form__back-btn' onClick={this.goBack} >
                        <img src={back} alt="back button" />
                    </button>
                    <h1 className='inventory-form__heading'>{title}</h1>
                </header>
                {requestError &&
                    <div className='inventory-form__error'>
                        <h2>Error with Request</h2>
                        <p>Please try to refresh page and make sure you are supplying a correct inventory id.</p>
                    </div>
                }
                {!requestError &&
                    <form className='inventory-form__form' onSubmit={(e) => this.handleSubmit(e)}>
                        <div className='inventory-form__body'>
                            <section className='inventory-form__section inventory-form__section--first'>
                                <h2 className='inventory-form__subheading'>Item Details</h2>
                                <label className='inventory-form__input'> Item Name
                                    <input className={`inventory-form__field ${this.state.inputs[0]?.error}`} value={this.state.inputs[0]?.value || ''} onChange={(e) => this.handleInputChange(0, e)} type="text" name="itemName" placeholder="Item name" />
                                </label>
                                <label className='inventory-form__input'> Description
                                    <textarea className={`inventory-form__field inventory-form__field--textarea ${this.state.inputs[1]?.error}`} value={this.state.inputs[1]?.value || ''} type="text" name="description" placeholder="Add a description to the item" onChange={(e) => this.handleInputChange(1, e)} />
                                </label>
                                <label className='inventory-form__input'> Category
                                    <select className='inventory-form__field' name="category" value={this.state.inputs[2]?.value || 'Electronics'} onChange={(e) => this.handleInputChange(2, e)}>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Apparel">Apparel</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Health">Health</option>
                                    </select>
                                </label>
                            </section>
                            <section className='inventory-form__section'>
                                <h2 className='inventory-form__subheading'>Item Availability</h2>
                                <label> Status <br/>
                                    <input type="radio" name="status" value="In Stock" checked={this.state.inputs[3]?.value === 'In Stock'} onChange={(e) => this.handleInputChange(3, e)}/>
                                    <p className={`inventory-form__stock ${this.state.inputs[3]?.value === 'In Stock'? 'inventory-form__stock--selected' : ''} `}>In Stock</p>
                                    <input type="radio" name="status" value="Out of Stock" checked={this.state.inputs[3]?.value === 'Out of Stock'} onChange={(e) => this.handleInputChange(3, e)}/>
                                    <p className={`inventory-form__stock ${this.state.inputs[3]?.value === 'Out of Stock'? 'inventory-form__stock--selected' : ''} `}>Out of Stock</p>
                                </label>
                                {this.state.inputs[3]?.value === 'In Stock' && 
                                    <label className='inventory-form__input'> Quantity
                                        <input className={`inventory-form__field ${this.state.inputs[4]?.error}`} value={this.state.inputs[4]?.value || ''} onChange={(e) => this.handleInputChange(4, e)} type="text" name="quantity" placeholder="Item quantity" />
                                    </label>
                                }
                                <label className='inventory-form__input'> Warehouse
                                    <select className='inventory-form__field' name="warehouseName" value={this.state.inputs[5]?.value || this.state.warehouseList[0] || ''} onChange={(e) => this.handleInputChange(5, e)}>
                                        {this.state.warehouseList.map((warehouse, i) => (
                                            <option value={warehouse} key={i}>{warehouse}</option>
                                        ))}
                                    </select>
                                </label>
                            </section>
                        </div>
                        <section className='inventory-form__buttons'>
                            <Button extraClass="inventory-form__button--cancel" text="Cancel" type="cancel" onClick={this.goBack} />
                            <Button extraClass="inventory-form__button--submit" text={submitText} />
                        </section>
                    </form>
                }
            </section>
        );
    };
};

export default InventoryForm;
