import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { MoviesContextProvider } from "./context/MovieContext"
import { GlobalStyle } from "./styles/globalStyle"

function App() {

  return (
    <>
      <MoviesContextProvider>
        <Navbar />
        <GlobalStyle />
        <Outlet />
     </MoviesContextProvider>
    </>
  )
}

export default App
