import { Link } from "react-router-dom";
import { React, useState } from "react";
import db from "../Database";
import "./index.css";

function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}) {
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
                <h5>Course</h5>
                <input
                    value={course.name}
                    className="form-control w-25 mb-1"
                    onChange={(e) =>
                        setCourse({ ...course, name: e.target.value })
                    }
                />
                <input
                    value={course.number}
                    className="form-control w-25 mb-1"
                    onChange={(e) =>
                        setCourse({ ...course, number: e.target.value })
                    }
                />
                <input
                    value={course.startDate}
                    className="form-control w-25 mb-1"
                    type="date"
                    onChange={(e) =>
                        setCourse({ ...course, startDate: e.target.value })
                    }
                />
                <input
                    value={course.endDate}
                    className="form-control w-25 mb-1"
                    type="date"
                    onChange={(e) =>
                        setCourse({ ...course, endDate: e.target.value })
                    }
                />
                <button className="btn mx-2 mb-3" onClick={addNewCourse}>
                    Add
                </button>
                <button className="btn mb-3" onClick={updateCourse}>
                    Update
                </button>

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
                                        <button
                                            className="btn mx-3 mb-2"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn mx-3"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}
                                        >
                                            Delete
                                        </button>
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
