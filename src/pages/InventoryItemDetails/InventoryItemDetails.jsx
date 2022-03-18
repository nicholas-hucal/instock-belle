import "./InventoryItemDetails.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import goBackIcon from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Component } from "react";

export default class InventoryItemDetails extends Component {

    state = {
        displayedItem: {},
    };

    getItem = () => {
        axios
            .get(`http://localhost:8080/inventory/${this.props.match.params.inventoryId}`)
            .then((response) => {
                this.setState({ displayedItem: response.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getItem();
    }

    render = () => {
        return (
            <section className="item">
                <ul className="item__list">
                    <li className="item__go-back">
                        <Link to="/inventory" className="item__go-back-link">
                            <img className="go-back__icon" src={goBackIcon} alt="Icon to go back" />
                        </Link>
                    </li>
                    <li className="item__title">
                        <h2 className="item__title-text">
                            {this.state.displayedItem.itemName}
                        </h2>
                    </li>
                    <li className="item__edit">
                        <Link to="/inventory/edit" className="item__edit-link">
                            <img src={editIcon} alt="Edit Icon"/>
                        </Link>
                    </li>
                </ul>
                <div className="item__details">
                    <ul className="details">
                        <li className="details__item--1">
                            <div className="details__description">
                                <h3 className="details__header">Item Description:</h3>
                                <p className="details__text">{this.state.displayedItem.description}</p>
                            </div>
                            <div className="details__category">
                                <h3 className="details__header">Category:</h3>
                                <p className="details__text">{this.state.displayedItem.category}</p>
                            </div>
                        </li>
                        <li className="details__item--2">
                            <div className="details__container">
                                <div className="details__status">
                                    <h3 className="details__header">Status:</h3>
                                    <p className="details__text">{this.state.displayedItem.status}</p>
                                </div>
                                <div className="details__quantity">
                                    <h3 className="details__header">Quantity:</h3>
                                    <p className="details__text">{this.state.displayedItem.quantity}</p>
                                </div>
                            </div>
                            <div className="details__warehouse">
                                <h3 className="details__header">Warehouse:</h3>
                                <p className="details__text">{this.state.displayedItem.warehouseName}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }


}