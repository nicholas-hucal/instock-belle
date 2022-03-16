import React, { Component } from 'react';
import './WarehouseForm.scss';
import back from '../../assets/icons/arrow_back-24px.svg';

class WarehouseForm extends Component {

    state = {
        isValid: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleCancel = () => {
        this.props.router.goBack()
    }

    goBack = (e) => {
        this.props.router.goBack()
    }

    render() {
        const { type, title, warehouse } = this.props;

        return (
            <section className='warehouse-form'>
                <header className='warehouse-form__header'>
                    <button className='warehouse-form__back-btn' onClick={this.goBack} >
                        <img src={back} alt="back button" />
                    </button>
                    <h1 className='warehouse-form__heading'>{title}</h1>
                </header>
                <form className='warehouse-form__form' onSubmit={(e) => this.handleSubmit(e, warehouse.id)}>
                    <div className='warehouse-form__body'>
                        <section className='warehouse-form__section warehouse-form__section--first'>
                            <h2 className='warehouse-form__subheading'>Warehouse Details</h2>
                            <label className='warehouse-form__label'>
                                Warehouse Name
                                <input className='warehouse-form__input' type="text" name='name' value='' placeholder="Warehouse Name" />
                            </label>
                            <label className='warehouse-form__label'>
                                Street Address
                                <input className='warehouse-form__input' type="text" name='address' value='' placeholder="Street Address" />
                            </label>
                            <label className='warehouse-form__label'>
                                City
                                <input className='warehouse-form__input' type="text" name='city' value='' placeholder="City" />
                            </label>
                            <label className='warehouse-form__label'>
                                Country
                                <input className='warehouse-form__input' type="text" name='country' value='' placeholder="Country" />
                            </label>
                        </section>
                        <section className='warehouse-form__section'>
                            <h2 className='warehouse-form__subheading'>Warehouse Details</h2>
                            <label className='warehouse-form__label'>
                                Contact Name
                                <input className='warehouse-form__input' type="text" name='contactName' value='' placeholder="Contact Name" />
                            </label>
                            <label className='warehouse-form__label'>
                                Position
                                <input className='warehouse-form__input' type="text" name='contactPosition' value='' placeholder="Position" />
                            </label>
                            <label className='warehouse-form__label'>
                                Phone Number
                                <input className='warehouse-form__input' type="tel" name='contactPhone' value='' placeholder="Phone Number" />
                            </label>
                            <label className='warehouse-form__label'>
                                Email
                                <input className='warehouse-form__input' type="text" name='contactEmail' value='' placeholder="Email" />
                            </label>
                        </section>
                    </div>
                    <section className='warehouse-form__buttons'>
                        <button onClick={this.handleCancel} className='warehouse-form__button warehouse-form__button--cancel'>
                            Cancel
                        </button>
                        <button type="submit" className='warehouse-form__button warehouse-form__button--submit'>
                            + Add Warehouse
                        </button>
                    </section>
                </form>
            </section>
        );
    }
}

export default WarehouseForm;
