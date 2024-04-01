
import './App.css'
import Footer from './Components/Footer'
import NavBar from './Pages/NavBar'
import { Outlet } from 'react-router-dom'




function App() {
  

  return (
    <>
      <NavBar />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
