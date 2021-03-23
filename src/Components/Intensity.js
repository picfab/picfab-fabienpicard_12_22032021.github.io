import Spinner from './Spinner'
import React, { useEffect, useRef, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
} from "recharts";


export default function Intensity({user}) {
    const [width, setWidth] = useState(null)
    const graphRef = useRef(null);
    const [data, setData] = useState(null)

    useEffect(() => {
        user.loadIntensity()
            .then((user) => setData(user.intensity))
    }, [user])
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
