import "../styles/authentication/index.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Logo from "../utilities/Logo"
import { Col, Container, Row } from "react-bootstrap"
import AuthForm from "../components/Authentication/AuthForm"

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

  const handleChange = (e,type) => {
    if(type === "firstLogin"){
      setFirstLogin(e.target.value)
    }else if(type === "password"){
      setPassword(e.target.value)
    }
  }
  //(e) => setFirstLogin(e.target.value)
  return (
    <Container fluid className="mainImg d-flex flex-column justify-content-center align-items-center h-100">
      <Row className="justify-content-md-center">
        <Col md="auto"><Link to="/"><Logo moreClass="fenerbahce"/></Link></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <AuthForm handleSubmit={handleSubmit} firstLogin={firstLogin} password={password} loginHandleChange={(e) => handleChange(e,"firstLogin")} passwordHandleChange={(e) => handleChange(e,"password")} />
        </Col>
      </Row>
    </Container>
  )
}

export default Authentication