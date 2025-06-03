import './App.css'
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Ostukorvi from './pages/Ostukorvi'
import LisaToode from './pages/LisaToode'
import Esindused from './pages/Esindused'
import Kinkekaart from './pages/Kinkekaart'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'


function App() {

  return (
    <>
      <Link to="/">
        <img className="pilt" src="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>

       <Link to="/esindused">
        <button>Esindused</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>Kinkekaardid</button>
      </Link>

       <Link to="/seaded">
        <button>Seadetes</button>
      </Link>

    {/* path --> mis järgneb baasURL-le. localhost: 5173 */}
      <Routes>
        <Route path='/' element={<Avaleht />} />
        <Route path='/ostukorv' element={<Ostukorvi />} />
        <Route path='/lisa-toode' element={<LisaToode />} />
        <Route path='/esindused' element={<Esindused />} />
        <Route path='/osta-kinkekaart' element={<Kinkekaart />} />
        <Route path='/seaded' element={<Seaded />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
