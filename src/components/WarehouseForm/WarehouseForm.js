import React, { Component } from 'react';
import './WarehouseForm.scss';
import back from '../../assets/icons/arrow_back-24px.svg';
import { emailRegex, phoneRegex } from '../../utils/validation.js';

class WarehouseForm extends Component {

    state = {
        inputsGroupOne: [
            { label: 'Warehouse Name', name: 'name', value: '', type: 'text', error: '', valid: false },
            { label: 'Street Address', name: 'address', value: '', type: 'text', error: '', valid: false },
            { label: 'City', name: 'city', value: '', type: 'text', error: '', valid: false },
            { label: 'Country', name: 'country', value: '', type: 'text', error: '', valid: false }
        ],
        inputsGroupTwo: [
            { label: 'Contact Name', name: 'contactName', value: '', type: 'text', error: '', valid: false },
            { label: 'Position', name: 'contactPosition', value: '', type: 'text', error: '', valid: false },
            { label: 'Phone Number', name: 'contactPhone', value: '', type: 'tel', error: '', valid: false },
            { label: 'Email', name: 'contactEmail', value: '', type: 'email', error: '', valid: false }
        ]
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const first = this.state.inputsGroupOne.filter(input => input.valid !== true);
        const second = this.state.inputsGroupTwo.filter(input => input.valid !== true);

        if (first.length !== 0 && second.length !== 0) {
            alert('please fill out all fields');
        }
    }

    handleInputChange = (idx, event, group) => {
        const target = event.target;
        const current = target.value;
        const name = target.name;
        const type = target.type;
        let error = '';
        let valid = false;

        if (type === 'text') {
            if (current.length < 3) {
                error = 'warehouse-form__input--error';
            } else {
                valid = true
            }
        }
        if (type === 'email') {
            const email = current.match(emailRegex);
            if (email === null) {
                error = 'warehouse-form__input--error';
            } else {
                valid = true
            }
        }
        if (type === 'tel') {
            const email = current.match(phoneRegex);
            if (email === null) {
                error = 'warehouse-form__input--error';
            } else {
                valid = true
            }
        }

        const groupName = `inputsGroup${group}`;

        this.state[groupName][idx] = {
            ...this.state[groupName][idx],
            value: target.value,
            error,
            valid
        }

        this.setState({
            [groupName]: [...this.state[groupName]]
        });
    }

    handleCancel = () => {
        this.props.router.goBack()
    }

    goBack = (e) => {
        this.props.router.goBack()
    }

    render() {

        const { title, warehouse, submitText } = this.props;

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
                            {this.state.inputsGroupOne.map((input, idx) => (
                                <label key={`groupOne${idx}`} className='warehouse-form__label'>
                                    {input.label}
                                    <input
                                        className={`warehouse-form__input ${input.error}`}
                                        value={input.value}
                                        onChange={(e) => this.handleInputChange(idx, e, 'One')}
                                        type={input.type}
                                        name={input.name}
                                        placeholder={input.label} />
                                </label>
                            ))}
                        </section>
                        <section className='warehouse-form__section'>
                            <h2 className='warehouse-form__subheading'>Contact Details</h2>
                            {this.state.inputsGroupTwo.map((input, idx) => (
                                <label key={`groupTwo${idx}`} className='warehouse-form__label'>
                                    {input.label}
                                    <input
                                        className={`warehouse-form__input ${input.error}`}
                                        value={input.value}
                                        onChange={(e) => this.handleInputChange(idx, e, 'Two')}
                                        type={input.type}
                                        name={input.name}
                                        placeholder={input.label} />
                                </label>
                            ))}
                        </section>
                    </div>
                    <section className='warehouse-form__buttons'>
                        <button onClick={this.handleCancel} className='warehouse-form__button warehouse-form__button--cancel'>
                            Cancel
                        </button>
                        <button type="submit" className='warehouse-form__button warehouse-form__button--submit'>
                            {submitText}
                        </button>
                    </section>
                </form>
            </section>
        );
    }
}

export default WarehouseForm;
