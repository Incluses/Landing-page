import Main from './components/main/main.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<LoginAcessoRestrito/>}/>
        <Route path="/graficos" element={<Grafic/>}/>
      </Routes>
    </Router>
  )
}

export default App;