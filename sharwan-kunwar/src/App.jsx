
import RootLayout from './MainLayout/RootLayout'
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
import { useContext } from "react";

function App() {

  const { isDarkMode } = useContext(DarkModeContext);
  
  return (
    <>
      <div className={`min-h-screen flex justify-center items-start no-scrollbar ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-black'}`}>
          <RootLayout/>
      </div>  
    </>
  )
}

export default App
