import { Link } from "react-router-dom"
import "../styles/home/index.css"
import Logo from "../utilities/Logo"
import { Col, Container, Row } from "react-bootstrap"

function Home() {
  return (    
    <Container fluid className="mainImg d-flex flex-column justify-content-center align-items-center h-100">
        <Row className="justify-content-md-center"> 
          <Col md="auto"><Logo /></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto"><Link className="homeButton" to="/menu">Sipariş Ver</Link></Col>
        </Row>
        <Row className="justify-content-md-center my-2">
          <Col md="auto"><Link className="homeButton" to="/authentication">Admin Girişi</Link></Col>
        </Row>
    </Container>
  )
}

export default Home