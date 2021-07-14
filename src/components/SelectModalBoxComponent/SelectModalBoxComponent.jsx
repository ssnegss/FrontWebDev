import React from 'react';
import './SelectModalBoxComponent.css'

export const AddModalBoxComponent = ({ active, setActive }) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__contentAdd" onClick={e => e.stopPropagation()}>
                <button className="modal__button" >Add</button>
            </div>
        </div>
    );
};

export const EditModalBoxComponent = ({ active, setActive }) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__contentEdit" onClick={e => e.stopPropagation()}>
                <button className="modal__button">Edit</button> <hr/>
                <button className="modal__button">Delete</button>
            </div>
        </div>
    );
};