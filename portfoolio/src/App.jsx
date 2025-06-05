import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Courses from './pages/Courses.jsx';
import Hobbies from './pages/Hobbies.jsx';
import Work from './pages/Work.jsx';

function App() {
  return (
    <div className='App'>
      <img className="main-picture" src="https://static.vecteezy.com/system/resources/previews/011/067/273/non_2x/portfolio-button-portfolio-speech-bubble-portfolio-colorful-web-banner-illustration-vector.jpg" alt="" />
      <div className="rectangle"></div>

      <div className="navigation-pictures">
        <Link className="main-link" to="work">
          <img src="https://img.uxcel.com/tags/user-interface-ui-components-1707764923906-2x.jpg" alt="" />
          <p>Tööde leht</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img src="https://framerusercontent.com/images/g3JeyNK2QoJaa2fF93h82aBgaU.png" alt="" />
          <p>Hobide leht</p>
        </Link>
        <Link className="main-link" to="courses">
          <img src="https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/M6K4TirmGh/glossary/M36e5669dfd4b52477c65571a1479acd81676987587657/file/Mb4de6e716cf9eb420a1f39b7a0b320481707989448555.jpeg" alt="" />
          <p>Kursuste leht</p>
        </Link>
      </div>
      <Routes>
        <Route path="work" element={ <div>Work</div> }/>
        <Route path="hobbies" element={ <div>Hobbies</div> }/>
        <Route path="courses" element={ <div>Courses</div> }/>
      </Routes>
    </div>
  )
}

export default App;
