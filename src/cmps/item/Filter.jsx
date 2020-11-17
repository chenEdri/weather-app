import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react'
import { itemService } from '../../services/itemService.js'

export class Filter extends Component {

    state = {
        location: null
    }

    handleChange = ({ target }) => {
        let location = target.value;
        console.log('inside', location);
        itemService.getAutoComplete(location)
            .then(res => {
                console.log(res)
                this.setState({ location: res })
            })
    }

    onSave = (ev) => {
        ev.preventDefault()
        console.log(ev);
        this.props.onSetFilter(this.state.location[0])
    }


    render() {
        let places = null;
        const { location } = this.state;
        if (location) places = location.map(a => a.LocalizedName)
        return (
            <form className="filter flex sb align-center" onSubmit={(event) => this.onSave(event)}>
                <div>
                    <label htmlFor="">Enter a Location</label>
                    <Autocomplete
                        id="combo-box-demo"
                        options={location || []}
                        getOptionLabel={(place) => place.LocalizedName}
                        style={{ width: 300, height: 80 }}
                        renderInput={(params) => <TextField {...params} 
                        label="look for a place" 
                        variant="outlined" 
                        onChange={this.handleChange}
                       />} 
                    />
                </div>
                <button className="light-btn" onClick={this.onSave}>Save</button>
            </form>
        )
    }
}
