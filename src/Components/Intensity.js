import PropTypes from 'prop-types';
import Spinner from './Spinner'
import { useEffect, useRef, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
} from "recharts";

/**
 * Use Activity component for create the graph activity
 * @module Intensity
 * @component
 * @category Recharts
 * @param {object} param
 * @param {object} props.user the current user object
 * @example
 * const data = [{"value":110,"kind":6,"label":"intensity","labelfr":"Intensité"},{"value":220,"kind":5,"label":"speed","labelfr":"Vitesse"},{"value":80,"kind":4,"label":"strength","labelfr":"Force"},{"value":80,"kind":3,"label":"endurance","labelfr":"Endurance"},{"value":240,"kind":2,"label":"energy","labelfr":"Force"},{"value":200,"kind":1,"label":"cardio","labelfr":"Cardio"}];
 * return ( <Intensity data={data}/> )
 */
export default function Intensity({data}) {
    console.log(data);
    const [width, setWidth] = useState(null)
    const graphRef = useRef(null);
    /**
     * Set the with of this component
     */
    useEffect(() => {
        const { offsetWidth } = graphRef.current
        if (width !== offsetWidth) {
            setWidth(offsetWidth)
        }
    }, [width])
    return (
        <div className="intensity"
            ref={graphRef}>
            {!data ? <Spinner /> :
            <RadarChart
                cx={width/2}
                cy={width/2}
                width={width}
                height={width}
                data={data}
                margin={
                    { top: 50, right: 50, bottom: 50, left: 50 }
                }
            >
                <PolarAngleAxis
                    dataKey="label"
                    tickFormatter={x=>{
                        const element = data.find(elt=>elt.label===x)
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
            }
        </div>
    );
}

Intensity.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        labelfr: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }))
};
