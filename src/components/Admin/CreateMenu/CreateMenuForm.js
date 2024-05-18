import { Button, Form } from 'react-bootstrap'

function CreateMenuForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Görsel</Form.Label>
        <Form.Control type="file"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Ürün</Form.Label>
        <Form.Control type="text" placeholder="Ürün" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Fiyat</Form.Label>
        <Form.Control type="number" placeholder="Fiyat" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Ağırlık</Form.Label>
        <Form.Control type="number" placeholder="Ağırlık" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Açıklama</Form.Label>
        <Form.Control type="text" placeholder="Açıklama" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">Ekle</Button>
      </div> 
      
    </Form>
  )
}

export default CreateMenuForm