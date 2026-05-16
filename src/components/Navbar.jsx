import { useEffect, useState } from "react"
import "./Navbar.css"

// Main navigation component
function Navbar() {

    // Controls small navbar message visibility
    const [showMessage, setShowMessage] = useState(false)

    // Stores currently active navigation link
    const [activeLink, setActiveLink] = useState("home")

    // Controls navbar background on scroll
    const [isScrolled, setIsScrolled] = useState(false)

    // Navigation links
    const navLinks = [
        "home", "projects", "contact"
    ]

    useEffect(() => {

        function handleScroll() {

            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
        
    }, [])

    function handleLogoClick() {
        setShowMessage(!showMessage)
    }

    return (
        <nav className={isScrolled ? "navbar scrolled" : "navbar"}>

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