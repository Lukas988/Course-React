import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Sobre Nosotros</NavLink>
        </nav>
    )
}