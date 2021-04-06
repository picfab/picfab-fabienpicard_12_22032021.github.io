import PropTypes from 'prop-types'
import Spinner from './Spinner'
import { useRef } from "react"
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer
} from "recharts"

/**
 * Use Activity component for create the graph activity
 * @module Intensity
 * @component
 * @category 4 - Recharts
 * @param {object} props
 * @prop {array} data A array with all user Performance
 * @prop {number} data[].value value of this Performance
 * @prop {string} data[].label english label
 * @prop {string} data[].labelfr french label
 * @example
 * const data = [{"value":110,"kind":6,"label":"intensity","labelfr":"Intensité"},{"value":220,"kind":5,"label":"speed","labelfr":"Vitesse"},{"value":80,"kind":4,"label":"strength","labelfr":"Force"},{"value":80,"kind":3,"label":"endurance","labelfr":"Endurance"},{"value":240,"kind":2,"label":"energy","labelfr":"Force"},{"value":200,"kind":1,"label":"cardio","labelfr":"Cardio"}];
 * return ( <Intensity data={data}/> )
 */
export default function Intensity({ data }) {
    const graphRef = useRef(null)
    return (
        <div className="intensity"
            ref={graphRef}>
            {!data ? <Spinner /> :
                <ResponsiveContainer aspect={1/1}>
                    <RadarChart
                        data={data}
                        margin={
                            { top:36, right:36, bottom:36, left:36 }
                        }
                    >
                        <PolarAngleAxis
                            dataKey="label"
                            tickFormatter={x => {
                                const element = data.find(elt => elt.label === x)
                                return element.labelfr
                            }}
                        />
                        <PolarGrid />
                        <Radar
                            dataKey="value"
                            fill="#FF0101"
                            fillOpacity={0.6}
                            label={false}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

Intensity.propTypes = {
    /**
     * Array of performance objects with properties :<br>
     *{label : {string}, labelfr : {string}, value : {number}}
     */
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        labelfr: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }))
}
