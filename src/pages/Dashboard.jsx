import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <section>
            <h1>Dashboard</h1>          
            <br />

            <nav>
                <Link to="usuario">Usuario</Link>
                <Link to="configuracion">Configuracion</Link>
            </nav>

            <Outlet />
        </section>
    )
} 