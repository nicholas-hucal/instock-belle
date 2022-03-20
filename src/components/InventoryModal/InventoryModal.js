import React from "react";
import "./InventoryModal.scss";

export default function InventoryModal(props) {

    return (
        <>
            <section className="modal">
                <ul className="modal__list">
                    <li className="modal__list-close">
                        <span className="close" onClick={props.hideModal}>&times;</span>
                    </li>
                    <li className="modal__list-content">
                        <h2 className="modal__title">
                            Delete {props.name} inventory item?
                        </h2>
                        <p className="modal__text">
                            Please confirm that you'd like to delete the {props.name} from the inventory list. You won't be able to undo this action.
                        </p>
                    </li>
                    <li className="modal__list-buttons">
                        <button className="button__delete" onClick={props.delete}>
                            Delete
                        </button>
                        <button className="button__cancel" onClick={props.hideModal}>
                            Cancel
                        </button>
                    </li>
                </ul>
            </section>
        </>
    );
}