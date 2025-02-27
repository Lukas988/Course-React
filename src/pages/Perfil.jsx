import { useParams } from "react-router-dom"

export default function Home() {
    const { username } = useParams();

    return (
        <section>
            <h1>Página de Perfil</h1>
            <p>Estas viendo el perfil de {username}</p>
        </section>
    )
}