import PropTypes from 'prop-types';

/**
 * Create a custom tooltip
 * @module Activity/RenderTooltip
 * @component
 * @category Recharts
 * @subcategory Activity
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
        );
    }
    return null;
}

RenderTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
                value: PropTypes.number,
                unit: PropTypes.string
            })
    )
}


export default RenderTooltip


