import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getSelectComponentStyles as styles } from '../SelectComponent/SelectComponentStyles';
import './PictogramSelectComponent.css'

const useStyles = makeStyles((theme) => styles(theme));

export const PictogramSelectComponent = (props) => {
    const classes = useStyles();
    const [data, setData] = React.useState('');

    const [selectedInterior, setSelectedInterior] = useState()

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
                            <MenuItem key={index} value={menuItem.index} onClick={() => setSelectedInterior(menuItem.pic)}> { menuItem.name }</MenuItem>   
                    ))}
                </Select>
            </FormControl>
            <div className="modalBox__pictogram">
                <img
                    src={selectedInterior}
                    className="pictogram_window"
                />
            </div>
        </div>
    )
}