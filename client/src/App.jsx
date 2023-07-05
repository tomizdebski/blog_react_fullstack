import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Single from './pages/Single'
import Write from './pages/Write'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/single",
    element: <Single />,
  },
  {
    path: "/write",
    element: <Write />,
  },

]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
