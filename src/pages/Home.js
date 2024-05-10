import { Link } from "react-router-dom"
import "../styles/home/index.css"
import logo from "../assets/logo.png"

function Home() {
  return (    
    <div className="homeContainer">
      <div className="homeContainerInside">
        <div><img src={logo} className="homeLogo" alt="logo" /></div>
        <div className="homeButton"><Link className="homeA" to="/menu">Sipariş Ver</Link></div>
        <div className="homeButton"><Link className="homeA" to="/authentication">Admin Girişi</Link></div>
      </div>
    </div>
  )
}

export default Home