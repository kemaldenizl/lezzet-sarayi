import { Container, Alert, Button, Offcanvas } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import ManageBar from "../../components/Admin/manageBar/ManageBar";

function AdminLayout() {

  return (
    <>
      <Container fluid className="mainImg d-flex flex-column justify-content-center align-items-center h-100">
        <ManageBar />
        <Outlet />
      </Container>
    </>
    
  )
}

export default AdminLayout