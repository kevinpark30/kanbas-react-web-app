import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaPlus } from "react-icons/fa6";
import { IconContext } from "react-icons";
import "./index.css";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    const icons = [
        <IconContext.Provider value={{ color: "grey", size: 28 }}>
            <FaGripVertical />
        </IconContext.Provider>,
        <IconContext.Provider value={{ color: "green", size: 28 }}>
            <FaCheckCircle />
        </IconContext.Provider>,
        <IconContext.Provider value={{ size: 28 }}>
            <FaEllipsisV />
        </IconContext.Provider>,
        <IconContext.Provider value={{ size: 28 }}>
            <FaPlus />
        </IconContext.Provider>,
    ];
    return (
        <div>
            <div class="row mb-3">
                <div class="col-2">
                    <div class="input-group">
                        <input
                            type="text"
                            class="form-control w-25"
                            placeholder="Search for Assignment"
                        />
                    </div>
                </div>
                <div class="col-5"></div>
                <div class="col-3">
                    <button class="btn btn-header mx-1">
                        {icons[3]}
                        Group
                    </button>
                    <button class="btn btn-header red mx-1">
                        {icons[3]}
                        Assignment
                    </button>
                    <button class="btn btn-small mx-1">{icons[2]}</button>
                </div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col-10">
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-secondary">
                            {icons[0]} Assignments
                        </li>
                        {courseAssignments.map((assignment) => (
                            <il className="list-group-item assignment-item">
                                <div class="link-container">
                                    <Link
                                        key={assignment._id}
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    >
                                        {icons[0]} {assignment.title}
                                        <div class="float-end module-item-container">
                                            {icons[1]}
                                            {icons[2]}
                                        </div>
                                    </Link>
                                </div>
                            </il>
                        ))}
                    </ul>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}
export default Assignments;
