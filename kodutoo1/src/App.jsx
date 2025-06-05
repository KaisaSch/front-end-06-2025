
import './App.css'
import{ Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';

function App() {
  return (
    <>
      <Link to="/">
      <button>Avaleht</button>
      </Link>
      <Link to="/uudised">
      <button>Uudised</button>
      </Link>
      <Link to="/kontakt">
      <button>Kontakt</button>
      </Link>
      <Link to="/meist">
      <button>Meist</button>
      </Link>
      <Routes>
        <Route path='' element={ <div>Avaleht</div>}/>
        <Route path='uudised' element={ <div>Uudised</div>}/>
        <Route path='kontakt' element={ <div>Kontakt</div>}/>
        <Route path='meist' element={ <div>Meist</div>}/>
      </Routes>
    </>
  )
}

export default App;
