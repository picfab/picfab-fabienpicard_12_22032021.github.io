/**
 * Function use by Legend component
 * See parent component :<br>
 * <a href="./module-Activity.html">Activity</a>
 * @component
 * @category 4.1 - Activity child components
 * @see {@link https://recharts.org/en-US/api/Legend#content}
 * @example
 * return ( <RenderLegend /> )
 */
const RenderLegend = () => {
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
    )
}
export default RenderLegend
