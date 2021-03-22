import React from 'react'
import Picto from './Picto'
export default function MenuVertical() {
    return <div className="menuVert">
        <ul className="menuVert__list">
            <li className="menuVert__elt"><Picto type="lotus" /></li>
            <li className="menuVert__elt"><Picto type="swim" /></li>
            <li className="menuVert__elt"><Picto type="bike" /></li>
            <li className="menuVert__elt"><Picto type="muscu" /></li>
        </ul>
        <div className="menuVert__credits">Copiryght, SportSee 2020</div>
    </div>
}
