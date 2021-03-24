import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from "react";
import Spinner from './Spinner'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import { RenderTooltip, RenderBar, RenderLegend} from './GraphComponent/activity'

/**
 * Use Activity component for create the graph activity
 * See {@link ../module-Activity_RenderBar.html|qsdsdf} {@link Header} and [MyClass's foo property]{@link Activity/RenderBar} {@link Activity/RenderBar|aaaaa}.
 * Also, check out {@link https://recharts.org/en-US/api/BarChart|recharts}
 * @module Activity
 * @component
 * @category Recharts
 * @param {array} data
 * @param {string} data.date
 * @param {number} data.kilogram
 * @param {number} data.calories
 * @example
 * const data = [{"day":"2020-07-01","kilogram":70,"calories":240},{"day":"2020-07-02","kilogram":69,"calories":220},{"day":"2020-07-03","kilogram":70,"calories":280},{"day":"2020-07-04","kilogram":70,"calories":500},{"day":"2020-07-05","kilogram":69,"calories":160},{"day":"2020-07-06","kilogram":69,"calories":162},{"day":"2020-07-07","kilogram":69,"calories":390}];
 * return ( <Activity data={data}/> )
 */
export default function Activity({data}) {
    const [width, setWidth] = useState(null)
    const graphRef = useRef(null);
    /**
     * Set the width of this component
     */
    useEffect(() => {
        const { offsetWidth } = graphRef.current
        if (width !== offsetWidth){
            setWidth(offsetWidth)
        }
    }, [width])

    return (
        <div
            ref={graphRef}
            className="activity"
        >
            {!data?<Spinner/>:
                <BarChart
                    width={width}
                    height={width*38/100}
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
                        content={<RenderLegend/>}
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
            }
        </div>
    );
}

Activity.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
    }))
};
