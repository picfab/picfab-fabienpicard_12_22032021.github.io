export default function Spinner({ name, message }) {

    return <div className="spring-spinner">
        <div className="spring-spinner-part top">
            <div className="spring-spinner-rotator"></div>
        </div>
        <div className="spring-spinner-part bottom">
            <div className="spring-spinner-rotator"></div>
        </div>
    </div>
}
