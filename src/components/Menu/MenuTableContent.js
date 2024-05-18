import { Button, Card, Form, ListGroup, ListGroupItem, Modal } from "react-bootstrap"
import { useState } from 'react';

function MenuTableContent({image,content, price, amount, description, currency ,add=false}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [itemAmount, setItemAmount] = useState(1);

    const notKdvPrice = ((10 * price) / 11)
    const kdvPrice = (price - notKdvPrice)

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
                {add ? amount : itemAmount}
            </td>

            {add && <td className="d-grid gap-2"><Button variant="primary" onClick={handleShow}>Sepete Ekle</Button></td>}
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
                                <div class="col-auto"><label class="col-form-label" >Sipariş adeti seçiniz.</label></div>
                                <div class="col-auto"><input value={itemAmount} onChange={e => setItemAmount(e.target.value)} class="form-control" type="number" ></input></div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>Toplam ödenecek fiyat : {price * itemAmount}{currency}</ListGroup.Item>
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
                <Button variant="primary" onClick={handleClose}>Sepete Ekle</Button>   
            </Modal.Footer>
      </Modal>
    </>
  )
}

export default MenuTableContent