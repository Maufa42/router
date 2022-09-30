import { createContext, useState } from "react";
import Navbar from "./component/navbar/Navbar";
export const ThemeContext = createContext(null)

function App() {
  const [theme,setTheme] = useState("dark")
  const toggleTheme = ()=>{
    setTheme((curr)=>(curr === 'light' ? 'dark' : 'light'));
    
  }
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        <div className = "App" id = {theme}>
          <Navbar/>
        </div>

    </ThemeContext.Provider>
  )
}

export default App;
