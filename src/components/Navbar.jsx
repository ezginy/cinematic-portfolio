import { useState } from "react"
import "./Navbar.css"

// Main navigation component
function Navbar() {

    // Controls small navbar message visibility
    const [showMessage, setShowMessage] = useState(false)

    // Stores currently active navigation link
    const [activeLink, setActiveLink] = useState("home")

    // Navigation links
    const navLinks = [
        "home", "projects", "contact"
    ]

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
                {navLinks.map((link) => (
                    <li
                        key={link}
                        className={activeLink === link ? "active-link" : ""}
                        onClick={() => setActiveLink(link)}
                    >
                        <a href={`#${link}`}>
                            {link}
                        </a>
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Navbar