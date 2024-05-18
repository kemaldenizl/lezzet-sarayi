import { Link } from "react-router-dom"
import Logo from "../utilities/Logo"
import { Container,Row,Col } from "react-bootstrap"
import MenuTable from "../components/Menu/MenuTable"
import Cart from "../components/Menu/Cart"
import OrderNote from "../components/Menu/OrderNote"

function Menu() {
  return (
    <Container fluid className="mainImg h-100">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Link to="/"><Logo /></Link>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm={5}>
          <MenuTable/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm={2}>
          <Cart />
        </Col>
        <Col sm={3}> 
          <OrderNote />
        </Col>
      </Row>
    </Container>
  )
}

export default Menu