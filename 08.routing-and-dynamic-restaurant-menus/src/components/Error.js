import {useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Error</h1>
            <h2>An error occurred while loading the page.</h2>
            <p>{error.status} : {error.statusText}</p>
        </div>
    )
}

export default Error;