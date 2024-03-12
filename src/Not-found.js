import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <div>sorry</div>
            <Link to="/">Back to Homepage</Link>
        </div>
    );
}

export default NotFound;