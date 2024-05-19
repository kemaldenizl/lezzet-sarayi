import logo from "../assets/logo.png"

function Logo({size = "300px",logoStyleClass = ""}) {
  return (
    <img src={logo} height={size} width={size} alt="logo" className={logoStyleClass ? "": " " | logoStyleClass} />
  )
}

export default Logo