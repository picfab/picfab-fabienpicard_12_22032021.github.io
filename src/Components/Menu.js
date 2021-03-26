import Picto from './Picto'

/**
 * Create and display top Menu
 * @module Menu
 * @category 3 - Navigation
 * @component
 * @example
 * return (
 *   <Menu/>
 * )
 */

export default function Menu(){
    return <div className="menu">
        <ul className="menu__list">
            <li className="menu__elt"><Picto type="logo" /></li>
            <li className="menu__elt">Accueil</li>
            <li className="menu__elt">Profil</li>
            <li className="menu__elt">Réglage</li>
            <li className="menu__elt">Communauté</li>
        </ul>
    </div>
}
