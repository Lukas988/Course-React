import './App.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Perfil from './pages/Perfil'
import Busqueda from './pages/Busqueda'
import Dashboard from './pages/Dashboard'
import Usuario from './pages/Usuario'
import Configuracion from './pages/Configuracion'
import Login from './pages/Login'
import ProtectedRoute from './ProtectedRoute'
import { useState } from 'react'
import Productos, { productosLoader } from './pages/Productos'
import Register from './pages/Register'


function App() {
  const [user, setUser] = useState(null)

  const contactAction = async ({request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    console.log(data)
    return { message: "Formulario enviado" }
  }

  const router = createBrowserRouter([
    {
      path: 'productos',
      element: <Productos />,
      loader: productosLoader
    },
    {
      path: 'registro',
      element: <Register />,
      action: contactAction
    },
  ])

  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}
      
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/perfil/:username' element={<Perfil />} />
        <Route path='/busqueda' element={<Busqueda />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/dashboard' element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>}>
          <Route path='usuario' element={<Usuario />} />
          <Route path='configuracion' element={<Configuracion />} />
        </Route>
      </Routes> */}

      <RouterProvider router={router} />
    </>
  )
}

export default App
