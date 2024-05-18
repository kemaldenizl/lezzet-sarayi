import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function CreateMenuTable({image,content, price, amount, description}) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false)

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

  return (
    <>
        <tr>
            <td>
                <img width={50} class="img-thumbnail" alt ="asd" src={image}></img>
            </td>
            <td>
                {content}
            </td>
            <td>
                {price}
            </td>
            <td>
                {amount}
            </td>
            <td>
                {description}
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
            <Modal.Title>{content}'i düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form className='border rounded p-2'>
                <Form.Group className="mb-3">
                    <Form.Label>Görsel</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ürün</Form.Label>
                    <Form.Control type="text" placeholder="Ürün" value={content} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fiyat</Form.Label>
                    <Form.Control type="number" placeholder="Fiyat" value={price} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Ağırlık</Form.Label>
                    <Form.Control type="number" placeholder="Ağırlık" value={amount} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Açıklama</Form.Label>
                    <Form.Control type="text" placeholder="Açıklama" value={description} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">Ekle</Button>
                </div>    
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditModal}>İptal</Button>
            <Button variant="primary" onClick={handleCloseEditModal}>Düzenle</Button>   
        </Modal.Footer>
    </Modal>

    <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
            <Modal.Title>{content}'i sil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {content}'i silmek istediğinden emin misin?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDeleteModal}>İptal</Button>
            <Button variant="primary" onClick={handleCloseDeleteModal}>Sil</Button>   
        </Modal.Footer>
    </Modal>
    
    </>
  )
}

export default CreateMenuTable