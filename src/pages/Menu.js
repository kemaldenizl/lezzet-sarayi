import { Link } from "react-router-dom"
import Logo from "../utilities/Logo"
import { Container,Row,Col } from "react-bootstrap"
import MenuTable from "../components/Menu/MenuTable"

function Menu() {
  return (
    <Container fluid className="mainImg d-flex flex-column justify-content-center align-items-center h-100">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Link to="/"><Logo /></Link>
        </Col>
      </Row>
      
      <MenuTable/>

    </Container>
  )
}

export default Menu