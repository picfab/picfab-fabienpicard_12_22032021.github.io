import PropTypes from 'prop-types'
import Spinner from './Spinner'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts"
import { RenderTooltip, RenderBar, RenderLegend } from './GraphComponent/activity'

/**
 * Use Activity component for create the graph activity
 * See other component use in this one :<br>
 * <a href="./module-Activity_RenderBar.html">RenderBar</a><br>
 * <a href="./module-Activity_RenderLegend.html">RenderLegend</a><br>
 * <a href="./module-Activity_RenderTooltip.html">RenderTooltip</a>
 * @module Activity
 * @component
 * @category 4 - Recharts
 * @param {array} data
 * @prop {string} data[].date
 * @prop {number} data[].kilogram
 * @prop {number} data[].calories
 * @example
 * const data = [{"day":"2020-07-01","kilogram":70,"calories":240},{"day":"2020-07-02","kilogram":69,"calories":220},{"day":"2020-07-03","kilogram":70,"calories":280},{"day":"2020-07-04","kilogram":70,"calories":500},{"day":"2020-07-05","kilogram":69,"calories":160},{"day":"2020-07-06","kilogram":69,"calories":162},{"day":"2020-07-07","kilogram":69,"calories":390}];
 * return ( <Activity data={data}/> )
 */
export default function Activity({ data }) {

    return (
        <div
            className="activity"
        >
            {!data ? <Spinner /> :
                <ResponsiveContainer aspect={998/382}>
                    <BarChart
                        data={data}
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
                            content={<RenderTooltip />}
                        />
                        <Legend
                            content={<RenderLegend />}
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
                </ResponsiveContainer>
            }
        </div>
    )
}


Activity.propTypes = {
    /**
     * Not see this, watch Parameters and Properties <br>
     * Comments PropTypes.shape is not working with jsDoc
     * @ignore
     */
    data: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
    }))
}
