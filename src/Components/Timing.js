import React, { useEffect, useRef, useState } from "react";
import Spinner from './Spinner'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceArea,
    Legend
} from "recharts";

const daysLetter = ['L','M','M','J','V','S','D']

export default function Timing({user}) {
    const [hover, setHover] = useState(null)
    const [width, setWidth] = useState(null)
    const graphRef = useRef(null);

    const [sessions, setSessions] = useState(null)

    useEffect(() => {
        user.loadTiming()
            .then((user) => {
                setSessions(user.timing)})
    }, [user])
    useEffect(() => {
        const { offsetWidth } = graphRef.current
        if (width !== offsetWidth) {
            setWidth(offsetWidth)
        }
    }, [width])

    const renderTooltip = (props) => {
        return <div>
            {props.payload[0] && `${props.payload[0].value} ${props.payload[0].unit}`}
        </div>
    }
    const onMouseMove = (e) => {
        setHover(e.activeLabel)
    }
    const onMouseLeave = (e) => {
        setHover(null)
    }

    const newtick =(val)=>{
        return daysLetter[val - 1] ? daysLetter[val - 1]:''
    }

    const renderLegend = ()=>{
        return 'Durée moyenne des sessions'
    }

    function ReferenceBands(props: any) {
        const { x } = props;
        return (
            <path fillOpacity={.1} d={`M ${x},0 h ${width} v ${width} h -${width} Z`}></path>
        );
    }

    return (
        <div className="timing"
            ref={graphRef}
        >
            {!sessions ? <Spinner /> :
            <LineChart
                width={width}
                height={width}
                data={sessions}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
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
                    viewBox={{x: 0, y: 0, width: 50, height: 100 }}
                    cursor={false}
                    wrapperStyle={{
                        background:'#fff',
                        padding:'7px',
                        width: '100px',
                    }}
                    content={renderTooltip}
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
                    wrapperStyle={{
                        top:'10%',
                        width:'50%',
                        textAlign:'left',
                        left:'10%',
                    }}
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
            }
        </div>
    );
}
