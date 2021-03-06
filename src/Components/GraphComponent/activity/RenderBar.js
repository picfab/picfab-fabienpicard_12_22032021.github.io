import PropTypes from 'prop-types'
/**
 * Create the custom Bar
 * @component
 * @category 4.1 - Activity child components
 * @see [Activity](module-Activity.html) parent component
 * @see {@link https://recharts.org/en-US/examples/CustomShapeBarChart}
 * @param {object} props Send by Bar component
 * @prop {string} fill
 * @prop {x} number
 * @prop {y} number
 * @prop {width} number
 * @prop {height} number
 * @example
 * const width = 7;
 * const x = 65;
 * const y = 176;
 * const fill = "#E60000";
 * const height = 60;
 * return ( <RenderBar x={x} width={width} y={y} height={height} fill={fill} /> )
 */
const RenderBar = ({ fill, x, y, width, height }) => {
    return <g fill={fill}>
        <rect y={y} x={x} width={width} height={height} />
        <circle cx={x + width / 2} cy={y} r={width / 2} />
    </g>
}
RenderBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
}

export default RenderBar
