import { useState } from "react"
import "./Navbar.css"

// Main navigation component
function Navbar() {

    // Controls small navbar message visibility
    const [showMessage, setShowMessage] = useState(false)

    // Stores currently active navigation link
    const [activeLink, setActiveLink] = useState("home")

    function handleLogoClick() {
        setShowMessage(!showMessage)
    }

    return (
        <nav className="navbar">

            <div>
                <h2 className="navbar-logo" onClick={handleLogoClick}>
                    ezgi.
                </h2>

                {showMessage && (
                    <p className="navbar-message">
                        still learning react every day
                    </p>
                )}
            </div>

            <ul className="navbar-links">
                <li
                    className={activeLink === "home" ? "active-link" : ""}
                    onClick={() => setActiveLink("home")}>
                    home
                </li>

                <li className={activeLink === "projects" ? "active-link" : ""}
                    onClick={() => setActiveLink("projects")}>
                    projects
                </li>

                <li className={activeLink === "contact" ? "active-link" : ""}
                    onClick={() => setActiveLink("contact")}>
                    contact
                </li>
            </ul>

        </nav>
    )
}

export default Navbar