import React, { useState } from 'react'
import { Button, Card, Form, ListGroup, Modal } from 'react-bootstrap'

function CreateUserTable({image, name, surname, mail, phone, nationalIdentity, role, salary}) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDetailsModal, setShowDetailsModal] = useState(false)

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);

    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    const handleCloseDetailsModal = () => setShowDetailsModal(false);
    const handleShowDetailsModal = () => setShowDetailsModal(true);


  return (
    <>
        <tr>
            <td>
                <img width={50} class="img-thumbnail" alt ="asd" src={image}></img>
            </td>
            <td>
                {name}
            </td>
            <td>
                {surname}
            </td>
            <td>
                <Button className='w-100' variant="success" onClick={handleShowDetailsModal}>Detaylar</Button>
            </td>
            <td>
                <Button className='w-100' variant="warning" onClick={handleShowEditModal}>Düzenle</Button>
            </td>
            <td>
                <Button className='w-100' variant="danger" onClick={handleShowDeleteModal}>Kaldır</Button>
            </td>
        </tr>


        <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
            <Modal.Title>{name}'i düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Görsel</Form.Label>
        <Form.Control type="file"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Isim - Soyisim</Form.Label>
        <Form.Control type="text" placeholder="isim - soyisim" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mail</Form.Label>
        <Form.Control type="email" placeholder="mail" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Telefon Numarası</Form.Label>
        <Form.Control type="text" placeholder="telefon numarası" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>TC Kimlik Numarası</Form.Label>
        <Form.Control type="text" placeholder="tc kimlik numarası" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Görevi</Form.Label>
        <Form.Control type="text" placeholder="görevi" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Maaşı</Form.Label>
        <Form.Control type="number" placeholder="maaşı" />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditModal}>İptal</Button>
            <Button variant="primary" onClick={handleCloseEditModal}>Düzenle</Button>   
        </Modal.Footer>
    </Modal>

    <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
            <Modal.Title>{name}'i sil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {name}'i silmek istediğinden emin misin?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDeleteModal}>İptal</Button>
            <Button variant="primary" onClick={handleCloseDeleteModal}>Sil</Button>   
        </Modal.Footer>
    </Modal>

    <Modal show={showDetailsModal} onHide={handleCloseDetailsModal}>
      <Modal.Header closeButton>
          <Modal.Title>Detayları</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name} {surname}</Card.Title>
                <Card.Text>{role}</Card.Text>
            </Card.Body>          
            <ListGroup className="list-group-flush">
              <ListGroup.Item>E-Mail: {mail}</ListGroup.Item>
              <ListGroup.Item>Telefon numarası: {phone}</ListGroup.Item>
              <ListGroup.Item>TC kimlik numarası:{nationalIdentity}</ListGroup.Item>
              <ListGroup.Item>Maaşı: {salary}</ListGroup.Item>
              <ListGroup.Item>Şifresi: password</ListGroup.Item>
            </ListGroup>                              
          </Card>      
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseDetailsModal}>Çıkış</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default CreateUserTable