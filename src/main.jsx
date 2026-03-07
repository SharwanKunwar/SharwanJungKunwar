import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DarkModeProvider } from './context/DarkModeContext.jsx'

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import NotFound from './pages/NotFound.jsx'
import MySelf from './pages/MySelf.jsx'
import BlogPage from './pages/BlogPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"home",
        element: <Home/>
      },
      {
        path:"projects",
        element:<Projects/>
      },
      {
        path:"/mySelf",
        element: <MySelf/>
      },
      {
        path:"blog",
        element: <BlogPage/>,
      },

      { path: "*", element: <NotFound /> }, // <-- Catch-all 404
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router}/>
    </DarkModeProvider>
  </StrictMode>,
)
