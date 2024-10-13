import NavScrollExample from "./components/navbar/NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginAcessoRestrito from "./components/login-acesso-restrito/LoginAcessoRestrito.jsx"
import Grafic  from "./components/grafic/Grafic.jsx";
import Main from "./components/main/main.jsx"
import Infos from "./components/infos/Infos.jsx"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<LoginAcessoRestrito/>}/>
        <Route path="/grafic" element={<Grafic/>}/>
        <Route path="/infos" element={<Infos/>}/>
      </Routes>
    </Router>
  )
}

export default App;