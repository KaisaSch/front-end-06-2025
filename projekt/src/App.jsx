import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';

function App() {

  return (
    <>
      <Link to ="/">
           <button>Avalehele</button>
         </Link>
         <Link to ="/kontakt">
           <button>Kontakt</button>
         </Link>
         <Link to ="/meist">
           <button>Meist</button>
         </Link>
         <Routes>
           <Route path="" element={ <Avaleht /> } />
           <Route path="kontakt" element={ <Kontakt /> } />
           <Route path="meist" element={ <Meist /> } />
         </Routes>
    </>
  )
}

export default App
