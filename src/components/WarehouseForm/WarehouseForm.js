import React, { Component } from 'react';
import './WarehouseForm.scss';
import back from '../../assets/icons/arrow_back-24px.svg';
import { emailRegex, phoneRegex } from '../../utils/validation.js';
import axios from 'axios';
import Input from '../Input/Input';
import Button from '../Button/Button';

class WarehouseForm extends Component {

    state = {
        inputs: [
            { label: 'Warehouse Name', name: 'name', value: '', type: 'text', error: '', valid: false },
            { label: 'Street Address', name: 'address', value: '', type: 'text', error: '', valid: false },
            { label: 'City', name: 'city', value: '', type: 'text', error: '', valid: false },
            { label: 'Country', name: 'country', value: '', type: 'text', error: '', valid: false },
            { label: 'Contact Name', name: 'contactName', value: '', type: 'text', error: '', valid: false },
            { label: 'Position', name: 'contactPosition', value: '', type: 'text', error: '', valid: false },
            { label: 'Phone Number', name: 'contactPhone', value: '', type: 'tel', error: '', valid: false },
            { label: 'Email', name: 'contactEmail', value: '', type: 'email', error: '', valid: false }
        ]
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const inputs = [...this.state.inputs];
        const check = inputs.filter(input => input.valid !== true);

        if (check.length !== 0 ) {
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
                data[field.name] =  field.value;
            })
            axios
                .post('http://localhost:8080/warehouse', data)
                .then(response =>{
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

        this.state.inputs[idx] = {
            ...this.state.inputs[idx],
            value: target.value,
            error,
            valid
        }

        this.setState({
            inputs: [...this.state.inputs]
        });
    }

    goBack = (e) => {
        this.props.history.goBack()
    }

    render() {
        const { title, warehouse, submitText } = this.props;
        const { inputs } = this.state;
        const half = Math.ceil(inputs.length / 2);    

        return (
            <section className='warehouse-form'>
                <header className='warehouse-form__header'>
                    <button className='warehouse-form__back-btn' onClick={this.goBack} >
                        <img src={back} alt="back button" />
                    </button>
                    <h1 className='warehouse-form__heading'>{title}</h1>
                </header>
                <form className='warehouse-form__form' onSubmit={(e) => this.handleSubmit(e)}>
                    <div className='warehouse-form__body'>
                        <section className='warehouse-form__section warehouse-form__section--first'>
                            <h2 className='warehouse-form__subheading'>Warehouse Details</h2>
                            {inputs.slice(0, half).map((input, idx) => (
                                <Input 
                                    key={`inputs${idx}`} 
                                    error={input.error}
                                    value={input.value}
                                    handleInputChange={this.handleInputChange}
                                    type={input.type}
                                    name={input.name}
                                    placeholder={input.label}
                                    index={idx}
                                    label={input.label}
                                />
                            ))}
                        </section>
                        <section className='warehouse-form__section'>
                            <h2 className='warehouse-form__subheading'>Contact Details</h2>
                            {inputs.slice(-half).map((input, idx) => (
                                <Input 
                                    key={`inputs${idx + half}`} 
                                    error={input.error}
                                    value={input.value}
                                    handleInputChange={this.handleInputChange}
                                    type={input.type}
                                    name={input.name}
                                    placeholder={input.label}
                                    index={idx + half}
                                    label={input.label}
                                />
                            ))}
                        </section>
                    </div>
                    <section className='warehouse-form__buttons'>
                        <Button extraClass="warehouse-form__button--cancel" text="cancel" type="cancel" onClick={this.goBack}/>
                        <Button extraClass="warehouse-form__button--submit" text={submitText}/>
                    </section>
                </form>
            </section>
        );
    }
}

export default WarehouseForm;