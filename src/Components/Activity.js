//https://recharts.org/en-US/examples/SimpleBarChart
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const sessions = [
    {
        "day": "2020-07-01",
        "kilogram": 80,
        "calories": 240
    },
    {
        "day": "2020-07-02",
        "kilogram": 80,
        "calories": 220
    },
    {
        "day": "2020-07-03",
        "kilogram": 81,
        "calories": 280
    },
    {
        "day": "2020-07-04",
        "kilogram": 81,
        "calories": 290
    },
    {
        "day": "2020-07-05",
        "kilogram": 80,
        "calories": 160
    },
    {
        "day": "2020-07-06",
        "kilogram": 78,
        "calories": 162
    },
    {
        "day": "2020-07-07",
        "kilogram": 76,
        "calories": 390
    }
    ,
    {
        "day": "2020-07-07",
        "kilogram": 76,
        "calories": 390
    },
    {
        "day": "2020-07-07",
        "kilogram": 76,
        "calories": 390
    }
]

export default function Activity() {
    const [width,setWidth] = useState(null)
    const graphRef = useRef(null);
    useEffect(() => {
        const { offsetWidth } = graphRef.current
        if (width !== offsetWidth){
            setWidth(offsetWidth)
        }
    }, [width])
    const renderLegend = (props) => {
        const { payload } = props;
        return (
            <div className="legendActivity">
                <span className="legendActivity__title">Activité quotidienne</span>
                <span className="legendActivity__values">
                    <span className="legendActivity__poids">
                        <svg className="legendActivity__icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" fill="#282D30" />
                        </svg>
                        Poids (kg)
                    </span>
                    <span className="legendActivity__cal">
                        <svg className="legendActivity__icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" fill="#E60000" />
                        </svg>
                        Calories brûlées (kCal)
                    </span>
                </span>
            </div>
        );
    }

    const RenderBar = (props) => {
        const { fill, x, y, width, height } = props;
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

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            console.log(active, payload);
            return (
                <div className="tooltip">
                    {payload.map((item, i) => <div key={i} className="tooltip__text">{item.value} {item.unit}</div>)}
                </div>
            );
        }

        return null;
    };



    return (
        <div
            ref={graphRef}
            className="activity">
            <BarChart

                width={width}
                height={width*38/100}
                data={sessions}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid
                    strokeDasharray="2 2"
                    vertical={false}
                // width={2000}
                />
                <XAxis
                    dataKey="name"
                    axisLine={true}
                    tickLine={false}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    orientation={'right'}
                />
                <Tooltip
                    content={<CustomTooltip />}
                />
                <Legend
                    content={renderLegend}
                    verticalAlign="top"
                    align="right"
                    height={80}
                />
                <Bar
                    dataKey="kilogram"
                    fill="#282D30"
                    shape={<RenderBar />}
                    barSize={7}
                    unit={'kg'}
                />
                <Bar
                    dataKey="calories"
                    fill="#E60000"
                    shape={<RenderBar />}
                    barSize={7}
                    unit={'Kcal'}
                />
            </BarChart>
        </div>
    );
}
