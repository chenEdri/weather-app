import React, { Component } from "react";
import { ItemList } from '../../cmps/item/ItemList';
import { itemService } from '../../services/itemService.js'
import { Filter } from '../../cmps/item/Filter';



export class ItemApp extends Component {

    state = {
        items: null,
        LocationKey: null
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        // this.loadItems();
    }


    onSetFilter = (location) => {
        console.log(location);
        itemService.getLocationForcast(location)
            .then(res => this.setState({ items: res }))
    };

    saveToFav = () => {
        const { items } = this.state;
        itemService.saveToFav(items);
    }


    render() {
        const { items } = this.state;
        console.log(items);
        return (
            <div className="main-container mb80">
                <div className="flex align-center">
                    <Filter onSetFilter={this.onSetFilter} />
                    <button className="light-btn" onClick={this.saveToFav}>save to favorites</button>
                </div>
                {(items) ? <div>
                    <ItemList bottomBorder={true} items={items} />
                </div> : ''}
            </div>
        )
    }
}

