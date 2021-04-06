import PropTypes from 'prop-types'
import { ResponsiveContainer,RadialBarChart, RadialBar, Legend } from "recharts"
import { RenderLegendScore, style } from "./GraphComponent/score"

/**
 * Use Activity component for create the graph activity
 * See other component use in this one :<br>
 * <a href="./module-Score_RenderLegend.html">RenderLegend</a><br>
 * <a href="./global.html#style">style</a><br>
 * @module Score
 * @component
 * @category 4 - Recharts
 * @param {object} props
 * @prop {number} props.score is a number > 1
 * @example
 * const score = .3;
 * return ( <Score score={score}/> )
 */
export default function Score({ score }) {
    /**
     * the data of this component
     */
    const data = [{
        value: score,
        fill: "#FF0000"
    }]

    return (
        <div className="score">
            <ResponsiveContainer aspect={1/1}>
                <RadialBarChart
                    innerRadius={'100%'}
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
                        content={<RenderLegendScore />}
                        wrapperStyle={style.box}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

Score.propTypes = {
    /**
     * Score is a number > 1 (percentage : 1 === 100%)
     */
    score: PropTypes.number.isRequired
}
