import { useState } from "react";
import { Badge, Button, ListGroup, Modal } from "react-bootstrap"

function OrderTableContent({content, amount, customerMessage}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [orderState, setOrderState] = useState({
        bg : "primary",
        message : "Sipariş Alındı"
    })

  return (
    <>
        <tr>
            <td>{content}</td>
            <td>{amount}</td>
            <td>{customerMessage}</td>
            <td>
                <h5 className="d-flex justify-content-center align-items-center"><Badge bg={orderState.bg}>{orderState.message}</Badge></h5>
            </td>
            <td className="d-grid">
                <Button onClick={handleShow} variant="success">Durumu Güncelle</Button>
            </td>
        </tr>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{content} durumunu güncelle</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="d-flex flex-column"><Button onClick={() => {setOrderState({bg : "primary", message: "Sipariş Alındı"}); handleClose();}} variant="primary">Sipariş Alındı</Button></ListGroup.Item>
                    <ListGroup.Item className="d-flex flex-column"><Button onClick={() => {setOrderState({bg : "warning", message: "Hazırlanıyor"}); handleClose();}} variant="warning">Hazırlanıyor</Button></ListGroup.Item>
                    <ListGroup.Item className="d-flex flex-column"><Button onClick={() => {setOrderState({bg : "info", message: "Hazırlandı"}); handleClose();}} variant="info">Hazırlandı</Button></ListGroup.Item>
                    <ListGroup.Item>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className="d-flex flex-column"><Button onClick={() => {setOrderState({bg : "success", message: "Teslim Edildi"}); handleClose();}} variant="success">Sipariş teslim edildi</Button></ListGroup.Item>
                            <ListGroup.Item className="d-flex flex-column"><Button onClick={() => {setOrderState({bg : "danger", message: "İptal Edildi"}); handleClose();}} variant="danger">Siparişi iptal et</Button></ListGroup.Item>
                        </ListGroup>
                    </ListGroup.Item>                 
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>İptal</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default OrderTableContent