import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '10rem',
        margin: '0px 2rem',
    },
}));

export const SelectComponent = () => {
    const classes = useStyles();
    const [age, setDate] = React.useState('');

    const handleChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Date</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
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