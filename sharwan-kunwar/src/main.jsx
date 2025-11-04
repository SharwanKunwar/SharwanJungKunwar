import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './pages/About.jsx'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import Projects from './pages/Projects.jsx'
import Music from './pages/Music.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path:"home",
        element: <Home/>
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path:"music",
        element:<Music/>
      }
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
