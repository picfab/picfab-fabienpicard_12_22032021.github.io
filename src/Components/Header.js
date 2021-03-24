import PropTypes from 'prop-types';

/**
 * Afficher le message de bienvenu
 * @module Header
 * @category Application block
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
    /** Description of prop "foo". */
    name: PropTypes.string,
    message: PropTypes.string,
};
