import './App.css'
import HankoAuth from './components/HankoAuth'
import HankoProfile from './components/HankoProfile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const hankoKey = import.meta.env.VITE_HANKO_KEY;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HankoAuth hankoApi={hankoKey}/>} />
        <Route path="/profile" element={<HankoProfile hankoApi={hankoKey} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
