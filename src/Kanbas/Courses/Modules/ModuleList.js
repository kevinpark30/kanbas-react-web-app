import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";
import "./ModuleList.css";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const icons = [
        <IconContext.Provider value={{ color: "grey", size: 28 }}>
            <FaGripVertical />
        </IconContext.Provider>,
    ];
    return (
        <ul className="list-group module-list">
            <li className="list-group-item grey">
                <button
                    className="btn green mx-3"
                    onClick={() =>
                        dispatch(addModule({ ...module, course: courseId }))
                    }
                >
                    Add
                </button>
                <button
                    className="btn red mx-3"
                    onClick={() => dispatch(updateModule(module))}
                >
                    Update
                </button>
                <div>
                    <input
                        className="mx-3"
                        value={module.name}
                        onChange={(e) =>
                            dispatch(
                                setModule({ ...module, name: e.target.value })
                            )
                        }
                    />

                    <textarea
                        className="mt-4"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(
                                setModule({
                                    ...module,
                                    description: e.target.value,
                                })
                            )
                        }
                    />
                </div>
            </li>

            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <button
                            className="btn green mx-3"
                            onClick={() => dispatch(setModule(module))}
                        >
                            Edit
                        </button>

                        <button
                            className="btn red mx-3"
                            onClick={() => dispatch(deleteModule(module._id))}
                        >
                            Delete
                        </button>

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
