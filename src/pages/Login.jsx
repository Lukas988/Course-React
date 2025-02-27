export default function Login({ setUser }) {
    const handleLogin = () => {
        setUser({ name: "Lucas" })
    }

    return <>
        <h1>Pagina de Login</h1>

        <h3>INICIAR SESIÓN</h3>
        <button onClick={handleLogin}>Ingresar</button>
    </>
}