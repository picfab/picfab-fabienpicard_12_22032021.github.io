import PropTypes from 'prop-types';

/**
 * Function use by Legend component
 * @component
 * @category 4.2 - Score child components
 * @see {@link https://recharts.org/en-US/api/Legend#content}
 * @param {object} props
 * @prop {array} payload Array of payload graph
 * @example
 * const payload = [{payload:{value:.3}}];
 * return ( <RenderLegendScore payload={payload}/> )
 */
const RenderLegendScore = ({payload}) => {
    return (
        <div className="scoreLegend">
            <div className="scoreLegend__title">Score</div>
            <div className="scoreLegend__info"><span className="scoreLegend__value">{payload[0].payload.value * 100}%</span>
                <br />de votre objectif</div>
        </div>
    );
}

const numberBetween=(props,propName)=> {
    if (typeof props[propName] === 'number'){
        let number = props[propName]
        return number >= 0 && number <= 0
    }
    return false
}

RenderLegendScore.propTypes = {
    payload:PropTypes.arrayOf(PropTypes.shape({
        payload:PropTypes.shape({
            value: numberBetween
        })
    }))
}

export default RenderLegendScore
