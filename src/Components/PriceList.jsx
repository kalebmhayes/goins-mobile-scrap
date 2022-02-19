import React from 'react'
import Prices from '../Prices.js'

export default function PriceList(){

    const price = Prices.map((thing , index)=>{
        return(
            <div key={index} className='prices-container'>
            <div className='prices-container-item'>{thing.item}</div>
            {typeof(thing.price)=='number' ? 
            <div className='prices-container-price'>{`$${thing.price} /lb `}</div> : 
            <div className='prices-container-price'>{thing.price}</div>}
            </div>
        )
    })
return(
    <div>
        <h1 className='price-list-title'>Price List</h1>
        <div className='price-list'>
        {price}
        </div>
    </div>
)

}