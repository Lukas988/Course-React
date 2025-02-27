import { Link } from "react-router-dom";

export default function About() {
    return (
        <section>
            <h1>Acerca de Nosotros</h1>
            <Link to="/perfil/juan">Perfil de Juan</Link>
            <Link to="/perfil/maria">Perfil de María</Link>
        </section>
    )
}