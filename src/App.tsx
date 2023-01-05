import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { GlobalStyle } from "./styles/globalStyle"

function App() {

  return (
    <div>
     <Navbar />
     <GlobalStyle />
     <Outlet />
    </div>
  )
}

export default App
