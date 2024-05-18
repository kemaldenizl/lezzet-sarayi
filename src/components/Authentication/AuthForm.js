import { useState } from "react";
import "../../styles/authentication/authForm/index.css"
import { BsEye, BsEyeSlash } from "react-icons/bs";


function AuthForm({handleSubmit, firstLogin, password, loginHandleChange, passwordHandleChange}) {

  const [passwordTypeBool, setPasswordTypeBool] = useState(true)
  const [passwordType, setPasswordType] = useState("password")

  const handleManageType = () => {
    setPasswordTypeBool(!passwordTypeBool)
    if(passwordType === "password"){
      setPasswordType("text")
    }else if(passwordType === "text"){
      setPasswordType("password")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="authForm">
        <div className="authFormGroup">
            <label className="authFormLabel">Telefon Numarası :</label>
            <input className="authFormInput" onChange={loginHandleChange} value={firstLogin} type="text"/>
        </div>
        <div className="authFormGroup authFormGroupPassword">
            <label className="authFormLabel">Şifre :</label>
            <input className="authFormInput authFormInputPassword" onChange={passwordHandleChange} value={password} type={passwordType}/>
            {passwordTypeBool && (<BsEye className="authFormIconPassword" onClick={handleManageType} />)}
            {!passwordTypeBool && (<BsEyeSlash className="authFormIconPassword" onClick={handleManageType}  />)}
        </div>
            <input className="authFormInput authFormSubmit" type="submit" value="Giriş Yap"/>
    </form>
  )
}

export default AuthForm