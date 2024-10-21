import NavScrollExample from "./components/navbar/NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginAcessoRestrito from "./components/login-acesso-restrito/LoginAcessoRestrito.jsx"
import Grafic  from "./components/grafic/Grafic.jsx";
import Main from "./components/main/main.jsx"
import TelaIntermediaria from "./components/Tela-intermediaria/Tela-intermediaria.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/intermediaria" element={<TelaIntermediaria/>}></Route>
        <Route path="/login" element={<LoginAcessoRestrito/>}/>
      </Routes>
    </Router>
  )
}

export default App;