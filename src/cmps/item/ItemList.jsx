import React from 'react'
import { ItemPreview } from './ItemPreview'
import { Card } from '../Card'

export function ItemList({ items }) {

    return (
        <div className= "card-grid">
            {
                items.DailyForecasts.map((item,idx)=>
                <Card key={ idx } img={`https://developer.accuweather.com/sites/default/files/0${item.Day.Icon}-s.png`} header={item.Date } body={ <ItemPreview item={ item } 
                /> } footer='The footer' />)
            }
        </div>
    )
}
