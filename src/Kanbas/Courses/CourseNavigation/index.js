import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = [
        "Home",
        "Modules",
        "Piazza",
        "Zoom Meetings",
        "Assignments",
        "Quizzes",
        "Grades",
        "People",
        "Panopto Video",
        "Discussions",
        "Announcements",
        "Pages",
        "Files",
        "Rubrics",
        "Outcomes",
        "Collaborations",
        "Syllabus",
        "Settings",
    ];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="courses-nav-sidebar">
            <ul className="list-group">
                {links.map((link, index) => (
                    <li
                        className={`list-group-item  courses-nav-item ${
                            pathname.includes(link) && "active"
                        }`}
                    >
                        <div class="category-container">
                            <Link
                                key={index}
                                to={`/Kanbas/Courses/${courseId}/${link}`}
                            >
                                {links[index]}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseNavigation;
