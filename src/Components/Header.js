import PropTypes from 'prop-types';

/**
 * Afficher le message de bienvenu
 * @module Header
 * @component
 * @example
 * const name = 'Fabien';
 * const message = 'Good job';
 * return (
 *   <Header message={message} name={name} />
 * )
 */

export default function Header({name,message}){
    return <header className="header">
        <h1 className="header__title">Bonjour <span className="header__name">{name}</span></h1>
        <div className="header__message">{message}</div>
    </header>
}

Header.propTypes = {
    /** The user name */
    name: PropTypes.string,
    /** A message for the user */
    message: PropTypes.string,
};
