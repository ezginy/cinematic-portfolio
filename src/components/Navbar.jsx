import "./Navbar.css"

// Main navigation component
function Navbar() {
    return (
        <nav className="navbar">

            <h2 className="navbar-logo">
                ezgi.
            </h2>

            <ul className="navbar-links">
                <li>home</li>
                <li>projects</li>
                <li>contact</li>
            </ul>

        </nav>
    )
}

export default Navbar