import { useState } from "react"
import "./Navbar.css"

// Main navigation component
function Navbar() {

    // Controls small navbar message visibility
    const [showMessage, setShowMessage] = useState(false)

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
                <li>home</li>
                <li>projects</li>
                <li>contact</li>
            </ul>

        </nav>
    )
}

export default Navbar