import React from 'react';
import { ButtonComponent as Button } from '../ButtonComponent/ButtonComponent';
import { ModalBoxTextFieldComponent as TextField } from '../ModalBoxTextFieldComponent/ModalBoxTextFieldComponent';
import { SelectComponent as Select } from '../SelectComponent/SelectComponent';
import { ModalBoxTimeFieldComponent as TimeField } from '../ModalBoxTimeFieldComponent/ModalBoxTimeFieldComponent';
import './ModalBoxComponent.css';
import { PictogramSelectComponent as Pictogram} from '../PictogramSelectComponent/PictogramSelectComponent'
import breakfast from '../../img/breakfast.png'
import lessons from '../../img/lessons.png'
import lunch from '../../img/lunch.png'
import recreationTime from '../../img/recreation-time.png'
import sleep from '../../img/sleep.png'
import supper from '../../img/supper.png'
import wakeUp from '../../img/wake-up.png'
import walk from '../../img/walk.png'
import workout from '../../img/workout.png'

export const ModalBoxComponent = ({ active, setActive, header, buttonName }) => {
    const handleModalBoxClose = () => {
        setActive(false)
    }
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
                <Pictogram
                    className="modalBox__pictogram"
                    items={
                        [{ name: 'Wake up', index: '0', pic: wakeUp },
                        { name: 'Workout', index: '1', pic: workout },
                        { name: 'Breakfast', index: '2', pic: breakfast },
                        { name: 'Studying', index: '3', pic: lessons },
                        { name: 'Lunch', index: '4', pic: lunch },
                        { name: 'Daytime sleep', index: '5', pic: sleep },
                        { name: 'Walking', index: '6', pic: walk },
                        { name: 'Supper', index: '7', pic: supper },
                        { name: 'Free time', index: '8', pic: recreationTime },
                        { name: 'Sleep', index: '9', pic: sleep }
                        ]}/>
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
                    <Button buttonName={buttonName} onClick={handleModalBoxClose}></Button>
                </div>
            </div>
        </div>
    );
};