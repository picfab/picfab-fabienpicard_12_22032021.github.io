import PropTypes from 'prop-types'
import { useRef, useState } from "react"
import Spinner from './Spinner'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceArea,
    Legend,
    ResponsiveContainer
} from "recharts"
import { style } from './GraphComponent/style'

/**
 * First letter of the weekday
 * @type {array}
 * @ignore
 */
const daysLetter = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

/**
 * Use Timing component for create the graph activity
 * @module Timing
 * @component
 * @category 4 - Recharts
 * @param {array} data
 * @param {number} data.day
 * @param {number} data.sessionLength
 * @example
 * const data = [{"day":1,"sessionLength":30},{"day":2,"sessionLength":40},{"day":3,"sessionLength":50},{"day":4,"sessionLength":30},{"day":5,"sessionLength":30},{"day":6,"sessionLength":50},{"day":7,"sessionLength":50}];
 * return ( <Timing data={data}/> )
 */

export default function Timing({ data }) {
    const [hover, setHover] = useState(null)
    const graphRef = useRef(null)

    /**
     * Custom tooltip
     * @function RenderTooltip
     * @param {object} props send by Tooltip
     * @returns {object} RenderTooltip
     */
    const RenderTooltip = (props) => {
        return <div>
            {props.payload[0] && `${props.payload[0].value} ${props.payload[0].unit}`}
        </div>
    }

    /**
     * Set x1 of ReferenceArea when the mouse enter in the component
     * @function onMouseMoveLineChart
     * @param {object} e send by LineChart
     */
    const onMouseMoveLineChart = (e) => {
        setHover(e.activeLabel)
    }

    /**
     * Reset x1 of ReferenceArea when the mouse leave the component
     * @function onMouseLeaveLineChart
     * @param {object} e send by LineChart
     */
    const onMouseLeaveLineChart = (e) => {
        setHover(null)
    }

    /**
     * Set the day tick
     * @function newtick
     * @param {number} day number a the weekday
     * @returns {string} The letter of the week
     */
    const newtick = (day) => {
        return daysLetter[day - 1] ? daysLetter[day - 1] : ''
    }

    /**
     * @function renderLegend
     * @see {@link https://recharts.org/en-US/api/Legend#content}
     * @returns {string} custom legend
     */
    const renderLegend = () => {
        return 'Durée moyenne des sessions'
    }

    /**
     * custom ReferenceArea when overlay
     * @function ReferenceBands
     * @see {@link https://recharts.org/en-US/api/ReferenceArea#shape}
     * @see {@link https://codesandbox.io/s/reference-area-shape-502rx}
     * @param {object} props from ReferenceArea
     * @returns {object} ReferenceBands
     */
    const ReferenceBands = (props) => {
        const { x } = props
        const { offsetWidth } = graphRef.current
        console.log(offsetWidth);
        return (
            <path fillOpacity={.1} d={`M ${x},0 h ${offsetWidth} v ${offsetWidth} h -${offsetWidth} Z`}></path>
        )
    }

    return (
        <div className="timing"
            ref={graphRef}
        >
            {!data ? <Spinner /> :
                <ResponsiveContainer aspect={1/1}>
                    <LineChart
                        data={data}
                        onMouseMove={onMouseMoveLineChart}
                        onMouseLeave={onMouseLeaveLineChart}
                    >
                        <XAxis
                            dataKey="day"
                            height={1}
                            y={200}
                            type="number"
                            tickFormatter={newtick}
                            axisLine={false}
                            tickLine={false}
                            domain={['dataMin - 1', 'dataMax + 1']}
                            tickCount={9}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            hide={true}
                            domain={[-20, 100]}
                        />
                        <Tooltip
                            viewBox={{ x: 0, y: 0, width: 50, height: 100 }}
                            cursor={false}
                            wrapperStyle={style.timingTooltip}
                            content={<RenderTooltip />}
                        />

                        {hover && <ReferenceArea
                            x1={hover}
                            x2={8}
                            y1={-20}
                            y2={100}
                            fill="#000"
                            fillOpacity="0.1"
                            shape={<ReferenceBands />}
                        />
                        }

                        <Legend
                            content={renderLegend}
                            verticalAlign="middle"
                            align="left"
                            wrapperStyle={style.timingLegend}
                        />
                        <Line
                            dot={false}
                            outerRadius={150}
                            type="natural"
                            dataKey="sessionLength"
                            strokeWidth={2}
                            stroke="#fff"
                            activeDot={{ r: 8 }}
                            connectNulls={true}
                            unit="min"
                        />
                    </LineChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

Timing.propTypes = {
    /**
     * Array of sessions objects with properties :<br>
     * { day: {number}, duration: {number}}
     */
    data: PropTypes.arrayOf(PropTypes.shape({
        /**
         * Day's session
         */
        day: PropTypes.number.isRequired,
        /**
         * session's duration
         */
        sessionLength: PropTypes.number.isRequired,
    }))
}
