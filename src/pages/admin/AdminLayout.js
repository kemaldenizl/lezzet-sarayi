import { Container, Row, Col } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import ManageBar from "../../components/Admin/manageBar/ManageBar";

function AdminLayout() {

  return (

      <Container fluid className="mainImg h-100">
        <Row className="h-100">
          <Col sm={3}><ManageBar /></Col>
          <Col sm={9} className="h-100"><Outlet /></Col>
        </Row>
      </Container>

  )
}

export default AdminLayout