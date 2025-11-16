import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './component/Nav.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';
import Service from './component/Service.jsx';
import Detail from './component/Detail.jsx';
import Login from './component/Login.jsx';

let router=createBrowserRouter([
  {
    path:"/",
    element:<><Nav></Nav><Home></Home></>
  },
  {
    path:"/about",
    element:<><Nav></Nav><About></About></>
  },
  {
    path:"/contact",
    element:<><Nav></Nav><Contact></Contact></>
  },
  {
    path:"/service",
    element:<><Nav></Nav><Service></Service></>
  },
  {
    path:"/detail/:id",
    element:<><Nav></Nav><Detail></Detail></>
  },
  {
      path:'/login',
      element:<><Nav></Nav><Login></Login></>
    }
])

function App() {
 return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
