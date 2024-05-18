import { Col, Container, Row } from "react-bootstrap"
import OrderTable from "../../../components/Staff/OrderTable"

function ManageOrder() {
  return (
    <Container className="h-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col className="bg-info">
          <h3>Siparişler</h3>
          <OrderTable/>
        </Col>
      </Row>
    </Container>        
  )
}

export default ManageOrder