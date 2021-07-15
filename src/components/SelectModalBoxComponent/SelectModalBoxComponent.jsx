import React, { useState } from 'react';
import { ModalBoxComponent as ModalBox } from '../ModalBoxComponent/ModalBoxComponent'
import './SelectModalBoxComponent.css'

export const AddModalBoxComponent = ({ active, setActive }) => {
    const handleModalBoxOpen = () => {
        setModalActive(true)
    }

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__contentAdd" onClick={e => e.stopPropagation()}>
                <button className="modal__button" onClick={handleModalBoxOpen}>Add</button>
                <ModalBox active={modalActive} setActive={setModalActive} header="Add activity" buttonName="Add"></ModalBox>
            </div>
        </div>
    );
};

export const EditModalBoxComponent = ({ active, setActive }) => {
    const handleModalBoxOpen = () => {
        setModalActive(true)
    }

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__contentEdit" onClick={e => e.stopPropagation()}>
                <button className="modal__button" onClick={handleModalBoxOpen}>Edit</button> <hr />
                <button className="modal__button">Delete</button>
                <ModalBox active={modalActive} setActive={setModalActive} header="Edit activity" buttonName="Edit"></ModalBox>
            </div>
        </div>
    );
};