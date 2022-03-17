import React, { Component } from 'react';
import './WarehouseForm.scss';
import back from '../../assets/icons/arrow_back-24px.svg';
import { emailRegex, phoneRegex } from '../../utils/validation.js';
import axios from 'axios';
import Input from '../Input/Input';
import Button from '../Button/Button';

class WarehouseForm extends Component {

    state = {
        inputs: [],
        currentWarehouse: '',
        requestError: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const inputs = [...this.state.inputs];
        const check = inputs.filter(input => input.valid !== true);

        if (check.length !== 0) {
            inputs.forEach((field, idx) => {
                const e = {
                    target: {
                        value: field.value,
                        name: field.name,
                        type: field.type
                    }
                }
                this.handleInputChange(idx, e)
            })
        } else {
            const data = {};
            inputs.forEach(field => {
                data[field.name] = field.value;
            })
            axios
                .post(`http://localhost:8080/warehouse/${this.state.currentWarehouse}`, data)
                .then(response => {
                    this.props.history.push(`/${response.data.id}`);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    handleInputChange = (idx, event) => {
        const target = event.target;
        const current = target.value;
        const type = target.type;
        let error = '';
        let valid = false;

        if (type === 'text') {
            if (current.length < 3) {
                error = 'input--error';
            } else {
                valid = true
            }
        }
        if (type === 'email') {
            const email = current.match(emailRegex);
            if (email === null) {
                error = 'input--error';
            } else {
                valid = true
            }
        }
        if (type === 'tel') {
            const email = current.match(phoneRegex);
            if (email === null) {
                error = 'input--error';
            } else {
                valid = true
            }
        }

        let currentState = [...this.state.inputs];

        currentState[idx].value = target.value;
        currentState[idx].error = error;
        currentState[idx].valid = valid;

        this.setState({
            inputs: currentState
        });
    }

    goBack = (e) => {
        this.props.history.goBack()
    }

    formatResponseObject = (data) => {
        this.setState({
            inputs: [
                { label: 'Warehouse Name', name: 'name', value: data ? data.name : '', type: 'text', error: '', valid: data ? true : false },
                { label: 'Street Address', name: 'address', value: data ? data.address : '', type: 'text', error: '', valid: data ? true : false },
                { label: 'City', name: 'city', value: data ? data.city : '', type: 'text', error: '', valid: data ? true : false },
                { label: 'Country', name: 'country', value: data ? data.country : '', type: 'text', error: '', valid: data ? true : false },
                { label: 'Contact Name', name: 'contactName', value: data ? data.contact.name : '', type: 'text', error: '', valid: data ? true : false },
                { label: 'Position', name: 'contactPosition', value: data ? data.contact.position : '', type: 'text', error: '', valid: data ? true : false },
                { label: 'Phone Number', name: 'contactPhone', value: data ? data.contact.phone : '', type: 'tel', error: '', valid: data ? true : false },
                { label: 'Email', name: 'contactEmail', value: data ? data.contact.email : '', type: 'email', error: '', valid: data ? true : false }
            ],
            currentWarehouse: data ? data.id : '',
            requestError: false
        })
    }

    componentDidMount() {
        const id = this.props.match.params.warehouseId;
        if (id) {
            axios
                .get(`http://localhost:8080/warehouse/${id}`)
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
        }
    }

    render() {
        const { title, submitText } = this.props;
        const { inputs, requestError } = this.state;
        const half = Math.ceil(inputs.length / 2);

        return (
            <section className='warehouse-form'>
                <header className='warehouse-form__header'>
                    <button className='warehouse-form__back-btn' onClick={this.goBack} >
                        <img src={back} alt="back button" />
                    </button>
                    <h1 className='warehouse-form__heading'>{title}</h1>
                </header>
                {requestError &&
                    <div className='warehouse-form__error'>
                        <h2>Error with Request</h2>
                        <p>Please try to refresh page and make sure you are supplying a correct warehouse id.</p>
                    </div>
                }
                {!requestError &&
                    <form className='warehouse-form__form' onSubmit={(e) => this.handleSubmit(e)}>
                        <div className='warehouse-form__body'>
                            <section className='warehouse-form__section warehouse-form__section--first'>
                                <h2 className='warehouse-form__subheading'>Warehouse Details</h2>
                                {inputs.slice(0, half).map((input, idx) => (
                                    <Input
                                        key={`inputs${idx}`}
                                        index={idx}
                                        input={input}
                                        handleInputChange={this.handleInputChange}
                                    />
                                ))}
                            </section>
                            <section className='warehouse-form__section'>
                                <h2 className='warehouse-form__subheading'>Contact Details</h2>
                                {inputs.slice(-half).map((input, idx) => (
                                    <Input
                                        key={`inputs${idx + half}`}
                                        index={idx + half}
                                        input={input}
                                        handleInputChange={this.handleInputChange}
                                    />
                                ))}
                            </section>
                        </div>
                        <section className='warehouse-form__buttons'>
                            <Button extraClass="warehouse-form__button--cancel" text="cancel" type="cancel" onClick={this.goBack} />
                            <Button extraClass="warehouse-form__button--submit" text={submitText} />
                        </section>
                    </form>
                }
            </section>
        );
    }
}

export default WarehouseForm;
