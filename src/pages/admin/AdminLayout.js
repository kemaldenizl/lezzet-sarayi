import { Container, Row, Col } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import ManageBar from "../../components/Admin/manageBar/ManageBar";

function AdminLayout() {

  return (
    <>
      <Container fluid className="mainImg d-flex flex-column justify-content-center align-items-center h-100">
        <Row>
          <Col lg={4}><ManageBar /></Col>
          <Col lg={8}><div className="adminContent"><Outlet /></div></Col>
        </Row>
      </Container>
    </>
  )
}

export default AdminLayout