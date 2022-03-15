import React from "react";
import "./InventoryModal.scss";

export default function InventoryModal() {

    const modal = document.querySelector("#modal");

    const span = document.querySelector(".close");

    span.onclick = () => {
        modal.style.display = "none";
    };

    return (
        <section id="modal" class="modal">
            <ul class="modal__list">
                <li class="modal__list-close">
                    <span class="close">&times;</span>
                </li>
                <li class="modal__list-content">
                    <h2 class="modal__title">
                        Delete VARIABLE inventory item?
                    </h2>
                    <p class="modal__text">
                        Please confirm that you'd like to delete the VARIABLE from the inventory list. You won't be able to undo this action.
                    </p>
                </li>
                <li class="modal__list-buttons">
                    <button class="button__delete">
                        Delete
                    </button>
                    <button class="button__cancel">
                        Cancel
                    </button>
                </li>
            </ul>
        </section>
    );
}