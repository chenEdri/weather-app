import React, { Component } from "react"

import { InsertEmoticon } from "@material-ui/icons"
import { ItemList } from "../cmps/item/ItemList"
import {itemService} from '../services/itemService.js'

export class Favorite extends Component{
    state={
        favorites:null
    }

    componentDidMount() {
        const favorites = itemService.loadFavorites();
        this.setState({favorites})
    }

    

    render(){
        const {favorites} = this.state
        if(!favorites) return <div>THER ARE NO FAVORITES PLACES</div>
        console.log(favorites);
        return(
            <div className="main-container mb80">
                <h2 className="tac">Favorites Places Wheather-Forcast</h2>
                <div>weather Category: {favorites.Headline.Category}</div>
                <ItemList items={favorites}/>
            </div>
        )
    }
}