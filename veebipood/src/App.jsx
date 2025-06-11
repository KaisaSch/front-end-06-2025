import './App.css'
import { Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Ostukorvi from './pages/Ostukorvi'
import LisaToode from './pages/LisaToode'
import Esindused from './pages/Esindused'
import Kinkekaart from './pages/Kinkekaart'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'


function App() {

  return (
    <>
      <Menu />

    {/* path --> mis järgneb baasURL-le. localhost: 5173 */}
      <Routes>
        <Route path='/' element={<Avaleht />} />
        <Route path='/ostukorv' element={<Ostukorvi />} />
        <Route path='/lisa-toode' element={<LisaToode />} />
        <Route path='/esindused' element={<Esindused />} />
        <Route path='/osta-kinkekaart' element={<Kinkekaart />} />
        <Route path='/seaded' element={<Seaded />} />
        <Route path='/kalkulaator' element={<Kalkulaator />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
