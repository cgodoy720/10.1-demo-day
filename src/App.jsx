import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import FellowProfile from './pages/FellowProfile'
import NavBar from './components/NavBar'
function App() {


  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Team />} />
        <Route path="/:name/:fellow" element={<FellowProfile />} />
      </Routes>
    </div>
  )
}

export default App
