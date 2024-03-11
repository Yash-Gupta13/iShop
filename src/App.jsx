import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <> 
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      
    </>
  );
}

export default App;
