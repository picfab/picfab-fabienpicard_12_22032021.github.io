import PropTypes from 'prop-types';
import Picto from './Picto'

/**
 * Display a informational block
 * @module Info
 * @category Application block
 * @component
 * @example
 * const value = '580 g';
 * const title = 'lipides';
 * const color = '#FD5181';
 * return (
 *   <Info value={value} title={title} color={color} />
 * )
 */
export default function Info ({value,title,color}){

    return <div className="info">
        <Picto type={title} color={color}/>
        <div className="info__content">
            <div className="info__value">{value}</div>
            <div className="info__title">{title.toUpperCase()}</div>
        </div>
    </div>
}

Info.propTypes = {
    /**
     * the value of the element
     *
     * @var {string}
     */
    value: PropTypes.string.isRequired,
    /**
     * the title of the element<br>
     * Value accepted :<br>
     * [logo, calories, proteines, glucides, lipides, lotus, swim, bike, muscu]<br>
     * Write in lowercase
     */
    title: PropTypes.string.isRequired,
    /**
     * the color of the icon
     */
    color: PropTypes.string,
};
