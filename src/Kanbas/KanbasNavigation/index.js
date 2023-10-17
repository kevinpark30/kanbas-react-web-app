import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaArrowRightFromBracket,
    FaBook,
    FaCalendarDays,
    FaCircleQuestion,
    FaCircleUser,
    FaClock,
    FaEnvelopeOpenText,
    FaGaugeHigh,
    FaNetworkWired,
} from "react-icons/fa6";
import { IconContext } from "react-icons";

function KanbasNavigation() {
    const links = [
        "Account",
        "Dashboard",
        "Courses",
        "Calendar",
        "Inbox",
        "Studio",
        "History",
        "Commons",
        "Help",
    ];
    const icons = [
        <IconContext.Provider value={{ color: "grey", size: 28 }}>
            <FaCircleUser />
        </IconContext.Provider>,
        <IconContext.Provider value={{ color: "red", size: 28 }}>
            <FaGaugeHigh />
        </IconContext.Provider>,
        <IconContext.Provider value={{ color: "red", size: 28 }}>
            <FaBook />
        </IconContext.Provider>,
        <IconContext.Provider value={{ color: "red", size: 28 }}>
            <FaCalendarDays />
        </IconContext.Provider>,
        <IconContext.Provider value={{ color: "red", size: 28 }}>
            <FaEnvelopeOpenText />
        </IconContext.Provider>,
        <IconContext.Provider value={{ color: "red", size: 28 }}>
            <FaClock />
        </IconContext.Provider>,
        <IconContext.Provider value={{ color: "red", size: 28 }}>
            <FaNetworkWired />
        </IconContext.Provider>,
        <IconContext.Provider value={{ color: "red", size: 28 }}>
            <FaArrowRightFromBracket />
        </IconContext.Provider>,
        <IconContext.Provider value={{ color: "red", size: 28 }}>
            <FaCircleQuestion />
        </IconContext.Provider>,
    ];

    const { pathname } = useLocation();

    return (
        <div className="kanbas-nav-sidebar">
            <ul className="list-group">
                {links.map((link, index) => (
                    <li
                        className={`list-group-item  kanbas-nav-item ${
                            pathname.includes(link) && "active"
                        }`}
                    >
                        <div className="option-container">
                            <Link key={index} to={`/Kanbas/${link}`}>
                                {icons[index]}
                                {link}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default KanbasNavigation;
