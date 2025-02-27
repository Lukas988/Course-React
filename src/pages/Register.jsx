import { Form, useActionData } from "react-router-dom";

export default function Register() {
    const actionData = useActionData();

    return (
        <section>
            <h1>Register</h1>

            <Form method="POST">
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" id="username" name="username" />
                <br />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
                <br />

                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" />
                <br />

                <button type="submit">Registrarse</button>
            </Form>

            {actionData && <p>{actionData.message}</p>}
        </section>
    )
}