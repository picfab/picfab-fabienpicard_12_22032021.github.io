import PropTypes from 'prop-types';
/**
 * @namespace
 * Create the custom Bar
 * @module Activity/RenderBar
 * @alias RenderBar
 * @component
 * @category Recharts
 * @subcategory Activity
 * @param {object} props Send by Bar component
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
};

export default RenderBar
