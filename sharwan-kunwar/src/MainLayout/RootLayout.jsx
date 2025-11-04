
import { Container } from '../components/Container'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'


function RootLayout({children}) {
  
  return (
    <>
        <Container className="no-scrollbar relative">
            <Navbar/>
            <div> 
                {children? children : <Outlet/>}
            </div>
        </Container>
    </>
  )
}

export default RootLayout
