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
                <TextField className="modalBox__name" />
                <h3>Time</h3>
                <TextField className="modalBox__time" />
                <h3>Pictogram</h3>
                <Select className="modalBox__pictogram" />
                <h1>PICTURE</h1>
                <h3>Replay</h3>
                <Select
                    className="modalBox__replay"
                    items={
                        [{ name: 'No', index: '' },
                        { name: 'Every day', index: '0' },
                        { name: 'Every week', index: '1' },
                        { name: 'Every month', index: '2' },
                        { name: 'Every year', index: '3' }
                        ]}
                />
                <h3>Reminder</h3>
                <Select
                    className="modalBox__reminder"
                    items={
                        [{ name: 'Off', index: '' },
                        { name: '15min', index: '0' },
                        { name: '30min', index: '1' },
                        { name: '45min', index: '2' },
                        { name: '60min', index: '3' }
                        ]}
                />
                <Button className="modalBox__button" buttonName={buttonName}></Button>
            </div>
        </div>
    );
};