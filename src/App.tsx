import './App.css'
import HankoAuth from './components/HankoAuth'
import HankoProfile from './components/HankoProfile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const hankoKey = "https://fea5acbc-8e16-4375-8c13-bc12eec89805.hanko.io";

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
