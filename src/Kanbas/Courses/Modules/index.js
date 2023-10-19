import ModuleList from "./ModuleList";
import "./index.css";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IconContext } from "react-icons";

function Modules() {
    const icons = [
        <IconContext.Provider value={{ color: "green", size: 14 }}>
            <FaCheckCircle />
        </IconContext.Provider>,
        <IconContext.Provider value={{ color: "white", size: 28 }}>
            <FaPlus />
        </IconContext.Provider>,
        <IconContext.Provider value={{ size: 28 }}>
            <FaEllipsisV />
        </IconContext.Provider>,
    ];

    return (
        <div>
            <div className="row">
                <div className="col-10">
                    <div class="float-end">
                        <div class="top-buttons">
                            <button class="btn">Collapse All</button>
                            <button class="btn">View Progress</button>
                            <div class="dropdown">
                                <button
                                    class="btn dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {icons[0]}
                                    Publish All
                                </button>
                            </div>
                            <button class="btn red">
                                {icons[1]}
                                Module
                            </button>
                            <button class="btn btn-small">{icons[2]}</button>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-10">
                    <hr />
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-10">
                    <ModuleList />
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}

export default Modules;
