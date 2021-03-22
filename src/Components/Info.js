import React from 'react'
import Picto from './Picto'
export default function Info ({value,title,color}){

    return <div className="info">
        <Picto type={title} color={color}/>
        <div className="info__content">
            <div className="info__value">{value}</div>
            <div className="info__title">{title.toUpperCase()}</div>
        </div>
    </div>
}
