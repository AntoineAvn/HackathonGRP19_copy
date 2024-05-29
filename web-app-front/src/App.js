import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Classement from "./pages/Classement";
import Predictions from "./pages/Predictions";
import FichePays from "./pages/FichePays";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/pays/:code" element={<FichePays />} />
        <Route path="/predictions" element={<Predictions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
