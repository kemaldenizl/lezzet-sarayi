import { Container, Alert, Button, Offcanvas, Row, Col } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import ManageBar from "../../components/Admin/manageBar/ManageBar";

function AdminLayout() {

  return (
    <>
      <Container fluid className="mainImg d-flex flex-column justify-content-center align-items-center h-100">
        <Row>
          <Col md={4}><ManageBar /></Col>
          <Col md={8}><Outlet /></Col>
        </Row>
      </Container>
    </>
    
  )
}

export default AdminLayout