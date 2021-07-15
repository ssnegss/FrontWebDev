import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import { getTextFieldComponentStyles as styles } from './TextFieldComponentStyles';

const useStyles = makeStyles((theme) => styles(theme));

export const TextFieldComponent = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.formControl}>
            <Input
                className={classes.selectTheme}
                id="weekField"
                label="Search field"
                type="week"
                variant="outlined"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}