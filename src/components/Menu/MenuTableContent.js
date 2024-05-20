import { Button, Card, ListGroup, Modal } from "react-bootstrap"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../../store/productSlice'

function MenuTableContent({image,content, price, amount, description, currency ,add=false}) {

    const cart = useSelector((state) => state.product.cart)
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [itemAmount, setItemAmount] = useState(1);

    const notKdvPrice = ((10 * price) / 11)
    const kdvPrice = (price - notKdvPrice)
    const allPrice = price * itemAmount

    const product = {
        product : content,
        productPrice : allPrice,
        productAmount : itemAmount 
    }

    const handleAdd = () => {
        handleClose()
        dispatch(addCart(product))
    }

  return (

    <>
        <tr>
            <td>
                {content}
            </td>
            <td>
                {price}
            </td>
            <td>
                {amount}
            </td>

            <td className="d-grid gap-2"><Button variant="primary" onClick={handleShow}>Sepete Ekle</Button></td>
        </tr>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{content}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{content}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <div className="row g-3 align-items-center">
                                <div className="col-auto"><label className="col-form-label" >Sipariş adeti seçiniz.</label></div>
                                <div className="col-auto"><input value={itemAmount} onChange={e => setItemAmount(e.target.value)} className="form-control" type="number" ></input></div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>Toplam ödenecek fiyat : {allPrice}{currency}</ListGroup.Item>
                        <ListGroup.Item>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Ürün Fiyatı : {Math.ceil(notKdvPrice * itemAmount)}{currency}</ListGroup.Item>
                            <ListGroup.Item>KDV : {Math.floor(kdvPrice * itemAmount)}{currency}</ListGroup.Item>
                        </ListGroup>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>İptal</Button>
                <Button variant="primary" onClick={handleAdd}>Sepete Ekle</Button>   
            </Modal.Footer>
      </Modal>
    </>
  )
}

export default MenuTableContent