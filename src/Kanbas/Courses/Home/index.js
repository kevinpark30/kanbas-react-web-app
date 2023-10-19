import ModuleList from "../Modules/ModuleList";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IconContext } from "react-icons";
import "./index.css";

function Home() {
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
                <div className="col-2">
                    <div class="btn-container mt-2">
                        <button class="btn btn-status mt-2">
                            Import Existing Content
                        </button>
                        <button class="btn btn-status mt-2">
                            Import From Commons
                        </button>
                        <button class="btn btn-status mt-2">
                            Choose Home Page
                        </button>
                        <button class="btn btn-status mt-2">
                            View Course Stream
                        </button>
                        <button class="btn btn-status mt-2">
                            New Announcement
                        </button>
                        <button class="btn btn-status mt-2">
                            New Analytics
                        </button>
                        <button class="btn btn-status mt-2">
                            View Course Notifications
                        </button>
                    </div>

                    <div class="coming-up-container mt-5">
                        <h5>To Do</h5>
                        <a href="#">View Calendar</a>
                    </div>

                    <hr />

                    <div class="calendar-container">
                        <i class="fa-regular fa-calendar fa-2x mt-3"></i>
                        <div class="lecture-container">
                            <a href="#"> Lecture </a>
                            <p>
                                CS4550.12631.202410 <br />
                                Sep 7 at 11:45am
                            </p>
                        </div>
                    </div>

                    <div class="calendar-container">
                        <i class="fa-regular fa-calendar fa-2x mt-3"></i>
                        <div class="lecture-container">
                            <a href="#"> Lecture </a>
                            <p>
                                CS4550.12631.202410 <br />
                                Sep 11 at 11:45am
                            </p>
                        </div>
                    </div>

                    <div class="calendar-container">
                        <i class="fa-regular fa-calendar fa-2x mt-3"></i>
                        <div class="lecture-container">
                            <a href="#"> Lecture </a>
                            <p>
                                CS4550.12631.202410 <br />
                                Sep 11 at 6pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
