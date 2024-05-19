import { Badge, Col, Container, Row, Table } from "react-bootstrap"
import LiveTable from "../components/Live/LiveTable"
import restaurantPov from "../assets/restaurantPov.mp4"
import Logo from "../utilities/Logo"
import { Link } from "react-router-dom"

function Live() {
  return (
    <Container fluid className="mainImg h-100 d-flex flex-column justify-content-md-center p-4">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Link to="/"><Logo /></Link>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="4">
          <LiveTable/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="2">
          <h5 className="bg-info p-4">
            <Badge bg="secondary">Sipariş Notu:</Badge>
            <p className="text-white">Soğansız olsun.</p>
          </h5>
        </Col>
        <Col md="2">
          <h5 className="bg-info p-4">
            <Badge bg="secondary">Sipariş Durumu:</Badge>
            <Badge bg="success">Teslim Edildi</Badge>
          </h5>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="4">
          <h4 className='text-white'>Canlı Yayın</h4>
          <video width="100%" height="100%" controls >
            <source src={restaurantPov} type="video/mp4"/>
          </video>
        </Col>
      </Row>
    </Container>
  )
}

export default Live