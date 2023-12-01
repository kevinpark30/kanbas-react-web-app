import KanbasNavigation from "./KanbasNavigation";
import { Route, Routes, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "../users/signin";
import Account from "../users/account";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const URL = `${process.env.REACT_APP_API_BASE}/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    });
    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([response.data, ...courses]);
    };
    const deleteCourse = async (courseId) => {
        const response = await axios.delete(`${URL}/${courseId}`);
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = async () => {
        const response = await axios.put(`${URL}/${course._id}`, course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
            <div className="row">
                <div class="col-md-auto">
                    <KanbasNavigation />
                </div>
                <div class="col">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route
                            path="Dashboard"
                            element={
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                />
                            }
                        />
                        <Route
                            path="Courses/:courseId/*"
                            element={<Courses />}
                        />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/account" element={<Account />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;
