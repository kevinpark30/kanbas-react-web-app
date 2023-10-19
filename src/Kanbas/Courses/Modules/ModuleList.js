import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./ModuleList.css";
import { FaGripVertical } from "react-icons/fa6";
import { IconContext } from "react-icons";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;

    const icons = [
        <IconContext.Provider value={{ color: "grey", size: 28 }}>
            <FaGripVertical />
        </IconContext.Provider>,
    ];
    return (
        <ul className="list-group module-list">
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <h5>
                            {icons[0]} {module.name} -{" "}
                            <span>{module.description}</span>
                        </h5>
                    </li>
                ))}
        </ul>
    );
}
export default ModuleList;
