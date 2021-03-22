//https://recharts.org/en-US/examples/SimpleRadarChart

import React, { useEffect, useRef, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
} from "recharts";

const data = [
    {
        "value": 80,
        "kind": 1
    },
    {
        "value": 120,
        "kind": 2
    },
    {
        "value": 140,
        "kind": 3
    },
    {
        "value": 50,
        "kind": 4
    },
    {
        "value": 200,
        "kind": 5
    },
    {
        "value": 90,
        "kind": 6
    }
];

export default function Intensity() {
    const [width, setWidth] = useState(null)
    const graphRef = useRef(null);
    useEffect(() => {
        const { offsetWidth } = graphRef.current
        if (width !== offsetWidth) {
            console.log(offsetWidth);
            setWidth(offsetWidth)
        }
    }, [width])
    return (
        <div className="intensity"
            ref={graphRef}>
            <RadarChart
                cx={width/2}
                cy={width/2}
                // outerRadius={150}
                // innerRadius={30}
                width={width}
                height={width}
                data={data}
                margin={
                    { top: 5, right: 5, bottom: 5, left: 5 }
                }
            >
                <PolarAngleAxis
                    dataKey="kind"
                    // axisLine={true}
                    // innerRadius={200}
                    // outerRadius={200}
                    radius={20}
                    axisLine={true}
                    axisLineType={'circle'}
                    tickLine={true}
                    />
                <PolarGrid
                    // stroke="#fff"
                    // innerRadius={200}
                    // outerRadius={200}
                    // polarAngles={[0,1,2,3,180]}
                    // polarRadius={[10,50,100,150,200]}
                    // gridType={'circle'}
                />
                <Radar
                    dataKey="value"
                    fill="#FF0101"
                    fillOpacity={0.6}
                    label={false}
                />
            </RadarChart>
        </div>
    );
}
