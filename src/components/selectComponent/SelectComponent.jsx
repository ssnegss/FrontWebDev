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
        height: '2.5rem',
        minWidth: '15rem'
    },
    selectTheme: {
        minWidth: '15rem',
        height: '2.5rem',
        backgroundColor: 'rgb(246, 246, 246)'
    }
}));

export const SelectComponent = (props) => {
    const classes = useStyles();
    const [data, setData] = React.useState('');

    const handleChange = (event) => {
        setData(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    className={classes.selectTheme}
                    displayEmpty
                    value={data}
                    onChange={handleChange}
                >
                    {props.items && props.items.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem.index}>{menuItem.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}