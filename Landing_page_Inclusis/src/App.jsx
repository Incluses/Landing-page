import NavScrollExample from "./components/navbar/NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginAcessoRestrito from "./components/login-acesso-restrito/LoginAcessoRestrito.jsx"
import Grafic  from "./components/grafic/Grafic.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAcessoRestrito/>}/>
        <Route path="/graficos" element={<Grafic/>}/>
      </Routes>
    </Router>
  )
}

export default App