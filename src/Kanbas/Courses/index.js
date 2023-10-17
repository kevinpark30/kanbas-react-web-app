import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { FaBars } from "react-icons/fa6";
import "./index.css";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
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
                            Blank
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
                        <Route path="Home" element={<h1>Home</h1>} />
                        <Route path="Modules" element={<h1>Modules</h1>} />
                        <Route
                            path="Assignments"
                            element={<h1>Assignments</h1>}
                        />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<h1>Assignment Editor</h1>}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;
