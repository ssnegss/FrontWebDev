import React from 'react';
import { ButtonComponent as Button } from '../ButtonComponent/ButtonComponent';
import { ModalBoxTextFieldComponent as TextField } from '../ModalBoxTextFieldComponent/ModalBoxTextFieldComponent';
import { SelectComponent as Select } from '../SelectComponent/SelectComponent'
import './ModalBoxComponent.css';

export const ModalBoxComponent = ({ active, setActive, header, buttonName }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1 className="modalBox__header">{header}</h1>
                <h3>Name</h3>
                <TextField></TextField>
                <h3>Time</h3>
                <TextField></TextField>
                <h3>Pictogram</h3>
                <Select></Select>
                <h1>PICTURE</h1>
                <h3>Replay</h3>
                <Select></Select>
                <h3>Reminder</h3>
                <Select
                 items={
                     [{name: 'No'},
                     {name: 'Every day'},
                     {name: 'Every week'},
                     {name: 'Every month'},
                     {name: 'Every year'}
                     ]}
                />
                <Button className="modalBox__button" buttonName={buttonName}></Button>
            </div>
        </div>
    );
};