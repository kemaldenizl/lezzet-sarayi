import logo from "../assets/logo.png"

function Logo({height = "300px",width = "300px",logoStyleClass = ""}) {
  return (
    <img src={logo} height={height} width={width} alt="logo" className={logoStyleClass ? "": " " | logoStyleClass} />
  )
}

export default Logo