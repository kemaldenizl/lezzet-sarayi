import "../../styles/authentication/authForm/index.css"

function AuthForm({handleSubmit, firstLogin, password, loginHandleChange, passwordHandleChange}) {
  return (
    <form onSubmit={handleSubmit} className="authForm">
        <div className="authFormGroup">
            <label className="authFormLabel">Email / Telefon :</label>
            <input className="authFormInput" onChange={loginHandleChange} value={firstLogin} type="text"/>
        </div>
        <div className="authFormGroup">
            <label className="authFormLabel">Şifre :</label>
            <input className="authFormInput" onChange={passwordHandleChange} value={password} type="password"/>
        </div>
            <input className="authFormInput authFormSubmit" type="submit" value="Giriş Yap"/>
    </form>
  )
}

export default AuthForm