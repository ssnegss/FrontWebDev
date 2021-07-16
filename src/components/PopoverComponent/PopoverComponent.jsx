import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { ModalBoxComponent as ModalBox } from '../ModalBoxComponent/ModalBoxComponent';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

export const PopoverAddComponent = (props) => {
    const classes = useStyles();

    const handleModalBoxOpen = () => {
        setModalAddActive(true)
    }

    const [modalAddActive, setModalAddActive] = useState(false);

    return (
        <div>
            <Popover
                id={props.id}
                open={props.open}
                anchorEl={props.anchorEl}
                onClose={props.handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Typography className={classes.typography}>
                    <button className="modal__button" onClick={handleModalBoxOpen}>Add</button>
                </Typography>
            </Popover>
            <ModalBox active={modalAddActive} setActive={setModalAddActive} header="Add activity" buttonName="Add"></ModalBox>
        </div>
    );
}

export const PopoverEditComponent = (props) => {
    const classes = useStyles();

    const handleModalBoxOpen = () => {
        setModalEditActive(true)
    }

    const [modalEditActive, setModalEditActive] = useState(false);

    return (
        <div>
            <Popover
                id={props.id}
                open={props.open}
                anchorEl={props.anchorEl}
                onClose={props.handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Typography className={classes.typography}>
                    <button className="modal__button" onClick={handleModalBoxOpen}>Edit</button> <hr />
                    <button className="modal__button" >Delete</button>
                </Typography>
            </Popover>
            <ModalBox active={modalEditActive} setActive={setModalEditActive} header="Edit activity" buttonName="Edit"></ModalBox>
        </div>
    );
}