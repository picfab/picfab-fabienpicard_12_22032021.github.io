import PropTypes from 'prop-types'

/**
 * Create a custom tooltip
 * @component
 * @category 4.1 - Activity child components
 * @see [Activity](module-Activity.html) parent component
 * @see {@link https://recharts.org/en-US/examples/CustomContentOfTooltip}
 * @param {object} props
 * @prop {array} payload Array of payload graph
 * @prop {bool} active true if tooltip is active
 * @example
 * const active = true;
 * const payload = [{unit: "kg",value: 69,},{unit: "Kcal",value: 162}];
 * return ( <RenderTooltip payload={payload} active={active}/> )
 */
const RenderTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                {payload.map((item, i) => <div key={i} className="tooltip__text">{item.value} {item.unit}</div>)}
            </div>
        )
    }
    return null
}

RenderTooltip.propTypes = {
    /**
     * true if tooltip is active
     */
    active: PropTypes.bool,
    /**
    * List of Payloads with properties : <br>
    * {value : {number} , unit : {string}}
    */
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            unit: PropTypes.string
        })
    )
}


export default RenderTooltip


