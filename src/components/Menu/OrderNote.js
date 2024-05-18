import { Button, Form, ListGroup, Modal } from "react-bootstrap"
import { useState } from 'react';

function OrderNote() {

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true);
    }
  return (
    <>
    <Form className="border p-3" onSubmit={handleShow}>
        <Form.Group className="mb-3" controlId="orderNote">
            <Form.Label className="text-danger">Sipariş Notu</Form.Label>
            <Form.Control as="textarea" rows={3} value={message} onChange={e => setMessage(e.target.value)}  />
        </Form.Group>
        <Form.Group className="d-grid gap-2">
            <Form.Group as="button" className="btn btn-success">Sipariş Ver!</Form.Group>
        </Form.Group>
    </Form>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Siparişi Onayla</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
                <ListGroup.Item>Ürün 1 miktar fiyat</ListGroup.Item>
                <ListGroup.Item>Ürün 2 miktar fiyat</ListGroup.Item>
                <ListGroup.Item>Ürün 3 miktar fiyat</ListGroup.Item>
                <ListGroup.Item>Ürün 4 miktar fiyat</ListGroup.Item>
                <br/>
                <ListGroup.Item>Sipariş Notu</ListGroup.Item>
                <ListGroup.Item>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{message}</ListGroup.Item>
                </ListGroup>
                </ListGroup.Item>
                <br/>
                <ListGroup.Item>Toplam Fiyat</ListGroup.Item>
                <ListGroup.Item>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Toplam kdv :</ListGroup.Item>
                        <ListGroup.Item>Toplam fiyat :</ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>İptal</Button>
            <Button variant="primary" onClick={handleClose}>Siparişi Tamamla</Button>   
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default OrderNote