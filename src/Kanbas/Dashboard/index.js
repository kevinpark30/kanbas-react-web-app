import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard() {
    const courses = db.courses;
    return (
        <div class="dashboard-container">
            <div class="row mx-3">
                <div class="heading-container mt-3">
                    <p>Dashboard</p>
                </div>
                <hr />
                <div class="subtitle mx-3">
                    <p>Published Courses</p>
                    <hr />
                </div>
            </div>
            <div class="row mx-3">
                <div class="row row-cols-1 mx-3">
                    {courses.map((course) => (
                        <div class="col card-container">
                            <Link
                                key={course._id}
                                to={`/Kanbas/Courses/${course._id}`}
                            >
                                <div class="card h-100">
                                    <img
                                        class="card-img-top"
                                        src="/images/react.png"
                                        alt="Card image cap"
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            {course.number} {course.name}
                                        </h5>
                                        <p class="card-text">
                                            {course.number} {course.endDate}
                                        </p>
                                        <p>
                                            202410_1 Spring 2023 Semester Full
                                            Term
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
