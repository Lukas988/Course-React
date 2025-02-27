import { useLoaderData } from "react-router-dom";

export default function Productos() {
    const productos = useLoaderData();

    return (
        <section>
            <h1>Lista de Productos</h1>
            <ul>
                {productos.map(({id, title}) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
        </section>
    )
}

export async function productosLoader() {
    const productos = await fetch("https://fakestoreapi.com/products")
    const res = await productos.json();

    return res;
}