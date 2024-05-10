import "../styles/authentication/index.css"
import logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Authentication() {

  const navigate = useNavigate()

  const [firstLogin, setFirstLogin] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if(firstLogin === "admin" || password === "admin"){
      navigate("/admin");
    }else{
      navigate("/error");
    }
  }

  return (
    <div className="container authContainer">
      <Link to="/"><img src={logo} alt="logo" className="homeLogo" /></Link>
      <form onSubmit={handleSubmit} className="authForm">
        <div className="authFormGroup">
          <label className="authFormLabel">Email / Telefon :</label>
          <input className="authFormInput" onChange={(e) => setFirstLogin(e.target.value)} value={firstLogin} type="text"/>
        </div>
        <div className="authFormGroup">
          <label className="authFormLabel">Şifre :</label>
          <input className="authFormInput" onChange={(e) => setPassword(e.target.value)} value={password} type="password"/>
        </div>
        <input className="authFormInput authFormSubmit" type="submit" value="Giriş Yap"/>
      </form>
    </div>
  )
}

export default Authentication