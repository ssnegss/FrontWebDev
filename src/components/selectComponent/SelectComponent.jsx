import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: '10rem',
        margin: '0px 2rem',
        backgroundColor: 'white',
    },
    selectTheme: {
        height: '2.2rem',
        backgroundColor: 'rgb(246, 246, 246)'
    }
}));

export const SelectComponent = () => {
    const classes = useStyles();
    const [week, setDate] = React.useState('');

    const handleChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    className={classes.selectTheme}
                    displayEmpty
                    value={week}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>12.07-18.07</MenuItem>
                    <MenuItem value={2}>19.07-25.07</MenuItem>
                    <MenuItem value={3}>26.07-01.08</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}