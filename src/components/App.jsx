
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "../pages/Acceuil";
import Apropos from "../pages/Apropos";
import Erreur from "../pages/Erreur";
import Header from "./Header";
import Footer from "./Footer";
import Data from "../pages/Data";

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/error" element={<Erreur />} />
          <Route path="*" element={<Erreur />} />
          <Route path="data/:id" element={<Data/>} />
        </Routes>
        <Footer />
      </BrowserRouter>  
  );
};

export default App;