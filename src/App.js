import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Anunciar from './pages/Anunciar'
import Estoque from './pages/Estoque'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/anunciar" element={<Anunciar />} />
        <Route path="/estoque" element={<Estoque />} />
      </Routes>
    </Router>
  )
}