import PropTypes from 'prop-types'

/**
 * Create a spinner for wait
 * @module Spinner
 * @component
 * @example
 * const className = 'class1 class2'
 * return (
 *   <Spinner className={className} />
 * )
 */
export default function Spinner({ className }) {
    return <div className={`spring-box ${className ? className : ''}`}>
        <div className='spring-spinner'>
            <div className="spring-spinner-part top">
                <div className="spring-spinner-rotator"></div>
            </div>
            <div className="spring-spinner-part bottom">
                <div className="spring-spinner-rotator"></div>
            </div>
        </div>
    </div>
}
Spinner.prototype = {
    /**
     * write the class like 'class1 class2 class3'
     */
    className: PropTypes.string
}
