import React from 'react';
import { ButtonComponent as Button } from '../ButtonComponent/ButtonComponent';
import { ModalBoxTextFieldComponent as TextField } from '../ModalBoxTextFieldComponent/ModalBoxTextFieldComponent';
import { SelectComponent as Select } from '../SelectComponent/SelectComponent';
import { ModalBoxTimeFieldComponent as TimeField } from '../ModalBoxTimeFieldComponent/ModalBoxTimeFieldComponent';
import './ModalBoxComponent.css';

export const ModalBoxComponent = ({ active, setActive, header, buttonName }) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1 className="modalBox__header">{header}</h1>
                <h3>Name</h3>
                <TextField className="modalBox__name" />
                <h3>Time</h3>
                <div className="modalBox__timeContainer">
                    <h3 className="modalBox__time_from">From</h3>
                    <TimeField className="modalBox__time" />
                    <h3 className="modalBox__time_to">to</h3>
                    <TimeField className="modalBox__time" />
                </div>
                <h3>Pictogram</h3>
                <Select
                    className="modalBox__pictogram"
                    items={
                        [{ name: 'Awakening', index: '0' },
                        { name: 'Charging', index: '1' },
                        { name: 'Breakfast', index: '2' },
                        { name: 'Lessons', index: '3' },
                        { name: 'Lunch', index: '4' },
                        { name: 'Daytime sleep', index: '5' },
                        { name: 'Walk', index: '6' },
                        { name: 'Supper', index: '7' },
                        { name: 'Free time', index: '2' },
                        { name: 'Sleep', index: '2' },
                        ]}
                />
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
                <div className="modalBox__buttonContainer">
                    <Button buttonName={buttonName}></Button>
                </div>
            </div>
        </div>
    );
};