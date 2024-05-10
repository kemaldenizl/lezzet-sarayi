import "../styles/authentication/index.css"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

function Authentication() {
  return (
    <div className="homeContainer authContainer">
      <Link to="/"><img src={logo} alt="logo" className="homeLogo" /></Link>
      <form className="authForm">
        <div className="authFormGroup">
          <label className="authFormLabel">Email / Telefon:</label>
          <input className="authFormInput" type="email"/>
        </div>
        <div className="authFormGroup">
          <label className="authFormLabel">Şifre:</label>
          <input className="authFormInput" type="password"/>
        </div>
        <input className="authFormInput authFormSubmit" type="submit" value="Giriş Yap"/>
      </form>
    </div>
  )
}

export default Authentication