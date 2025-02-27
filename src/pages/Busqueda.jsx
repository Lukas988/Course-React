import { useSearchParams } from "react-router-dom";

export default function Busqueda() {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoria = searchParams.get("categoria")
    const orden = searchParams.get("orden")

    return (
        <section>
            <h1>Página de Busqueda</h1>
            <p>Categoria: {categoria}</p>
            <p>Orden: {orden}</p>

            <br />

            <button onClick={() => setSearchParams({categoria, orden: "asc"})}>Ascendente</button>
            <button onClick={() => setSearchParams({categoria, orden: "desc"})}>Descendente</button>

        </section>
    )
}