import { Button, Form } from "react-bootstrap"

function CreateUserForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Görsel</Form.Label>
        <Form.Control type="text"/>
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
  )
}

export default CreateUserForm