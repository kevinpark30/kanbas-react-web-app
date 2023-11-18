import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
    const URL = process.env.REACT_LAB5_API;
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={`${URL}/welcome`} className="list-group-item">
                    Welcome
                </a>
            </div>
            <h2>Simple API Examples</h2>
            <WorkingWithArrays />
            <WorkingWithObjects />
            <EncodingParametersInURLs />
        </div>
    );
}
export default Assignment5;
