import Picto from './Picto'

/**
 * Create and display left vertical menu
 * @module MenuVertical
 * @category 3 - Navigation
 * @component
 * @example
 * return (
 *   <MenuVertical/>
 * )
 */
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
