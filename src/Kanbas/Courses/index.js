import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaBars } from "react-icons/fa6";
import "./index.css";

function Courses() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const URL = `${process.env.REACT_APP_API_BASE}/courses`;
    const findCourseById = async (courseId) => {
        const response = await axios.get(`${URL}/${courseId}`);
        console.log(response.data);
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    return (
        <div>
            <div class="row">
                <div class="heading-container mt-3">
                    <FaBars className="mt-1 mx-3" />

                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#">
                                {course.number} {course.name}
                            </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <Routes>
                                <Route
                                    path="Home"
                                    element={<span>Home</span>}
                                />
                                <Route
                                    path="Modules"
                                    element={<span>Modules</span>}
                                />
                                <Route
                                    path="Assignments"
                                    element={<span>Assignments</span>}
                                />
                                <Route
                                    path="Assignments/:assignmentId"
                                    element={<span>Assignments</span>}
                                />
                                <Route
                                    path="Grades"
                                    element={<span>Grades</span>}
                                />
                            </Routes>
                        </li>
                    </ol>
                </div>
                <hr />
            </div>
            <div class="row">
                <div class="col-1">
                    <CourseNavigation />
                </div>
                <div class="col">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;
