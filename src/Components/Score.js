import React, { useEffect, useRef, useState } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";


const style = {
    box:{
        top: 0,
        left: 0,
        right:0,
        bottom:0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: "24px",
        width:'100%',
        height:'100%',
        color: 'grey',
    },

    title:{
        position:'absolute',
        top:0,
        left:0,
        color: '#000',
    },

};

const renderLegend = (props) => {
    const { payload } = props;
    return (
        <div className="score" style={style.legendScore}>
            <div className="score__title" style={style.title}>Score</div>
            <div className="score__info"><span className="score__value">{payload[0].payload.value * 100 }%</span><br/>
            de votre objectif</div>
        </div>
    );
}
export default function Score({user}) {
    const [width, setWidth] = useState(null)
    const graphRef = useRef(null);
    useEffect(() => {
        const { offsetWidth } = graphRef.current
        if (width !== offsetWidth) {
            setWidth(offsetWidth)
        }
    }, [width])

    const data = [
        {
            value: user.score,
            fill: "#FF0000"
        }
    ];
    return (
        <div className="score"
            ref={graphRef}
            >
                <RadialBarChart
                    width={width}
                    height={width}
                    innerRadius={width/2}
                    barSize={10}
                    data={data}
                    startAngle={90}
                    endAngle={(data[0].value * 360 + 90)}
                >
                    <RadialBar
                        minAngle={15}
                        cornerRadius={50}
                        dataKey="value"
                    />
                    <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="vertical"
                        verticalAlign="middle"
                        content={renderLegend}
                        wrapperStyle={style.box}
                    />
                </RadialBarChart>
        </div>
    );
}
