import {useState} from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import CreateUserForm from '../../../components/Admin/CreateUser/CreateUserForm'
import CreateUserContent from '../../../components/Admin/CreateUser/CreateUserContent'

function ManageUsers() {

    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  return (
    <>
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center w-100 gap-3'>
    <Row>
        <Col className='d-flex gap-3'>
            <Button onClick={handleShow}>Yeni Personel Oluştur</Button>
        </Col>
    </Row>
    <Row>
        <Col className='table-container'>
            <CreateUserContent />
        </Col>
    </Row>
    </Container>

    <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Kullanıcı Oluştur</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <CreateUserForm />
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>İptal</Button>
        <Button variant="primary" onClick={handleClose}>Ekle</Button>   
    </Modal.Footer>
    </Modal>
    </>
  )
}

export default ManageUsers