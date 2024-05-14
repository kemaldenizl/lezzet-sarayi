import { Button, Form } from 'react-bootstrap'

function CreateMenuForm() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicContent">
            <Form.Label>Içerik</Form.Label>
            <Form.Control type="email" placeholder="içerik" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Fiyat</Form.Label>
            <Form.Control type="number" placeholder="fiyat" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Label>Gram</Form.Label>
            <Form.Control type="number" placeholder="gram" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">Ekle</Button>
       </div> 
      
    </Form>
  )
}

export default CreateMenuForm