import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Home() {
    const navigate = useNavigate();

    return (
        <section>
            <h1>Página de Inicio</h1>
            <Link to="/about">Sobre Nosotros</Link>
            <button onClick={() => navigate("/about")}>Ir a Sobre Nosotros</button>

            <br />
            
            <Link to="/busqueda?categoria=electronica&orden=asc">Buscar Electrónica</Link>
            <Link to="/busqueda?categoria=libros&orden=desc">Buscar Libros</Link>

            <br />

            <Link to="/dashboard" element={<Dashboard />}>Ir a Dashboard</Link>

        </section>
    )
}