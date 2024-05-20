import { Button, Form, ListGroup, Modal } from "react-bootstrap"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { order } from '../../store/productSlice'

function OrderNote() {

    const cart = useSelector((state) => state.product.cart)
    const totalPrice = useSelector((state) => state.product.totalPrice)
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true);
    }
    const handleComplete = () =>{
        handleClose()
        dispatch(order(message))
        navigate("/live")
    }
  return (
    <>
    <Form className="border p-3" onSubmit={handleShow}>
        <Form.Group className="mb-3" controlId="orderNote">
            <Form.Label className="text-danger">Sipariş Notu</Form.Label>
            <Form.Control as="textarea" rows={4} value={message} onChange={e => setMessage(e.target.value)}  />
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
                {
                    cart.map((value, index) => (<ListGroup.Item key={index}>{value.product} {value.productAmount} {value.productPrice}</ListGroup.Item> ))
                }
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
                        <ListGroup.Item>Toplam kdv :{totalPrice / 11}</ListGroup.Item>
                        <ListGroup.Item>Toplam fiyat :{totalPrice}</ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>İptal</Button>
            <Button variant="primary" onClick={handleComplete}>Siparişi Tamamla</Button>   
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default OrderNote