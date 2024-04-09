import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Pages/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* 

    //* its a good practice to initialize route files in App.jsx instead of main.jsx
    
    */}
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
