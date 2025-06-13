import "./index.css";
import { useState } from "react";
import { NavLink } from "react-router";
import { useTheme } from "../../contexts/ThemeContext";

const links = [{ to: "/", label: "Home" }];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="logo">MyApp</div>

            <button
                className="hamburger"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? "✖" : "☰"}
            </button>

            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                {links.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>
            <button onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
        </nav>
    );
}
