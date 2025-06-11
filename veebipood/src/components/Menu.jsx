import { Link } from "react-router-dom"

function Menu() {
  return (
    <div>
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

       <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>
    </div>
  )
}

export default Menu