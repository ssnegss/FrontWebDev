import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import { makeModalBoxTextFieldComponentStyles as styles } from './ModalBoxTextFieldComponentStyles'

const useStyles = makeStyles((theme) => styles(theme));

export const ModalBoxTextFieldComponent = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.formControl}>
            <Input
                className={classes.selectTheme}
                id="outlined-search"
                label="Search field"
                variant="outlined"
                value={props.value}
            />
        </div>
    )
}