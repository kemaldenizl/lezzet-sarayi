import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import restaurantPov from "../../../assets/restaurantPov.mp4"

function ManageStream() {
  return (
    <Container className='h-100 d-flex align-items-center w-100'>
      <Row className='w-100 gap-5'>
        <Col sm={4}>
          <Form className='d-flex flex-column gap-2'>
            <Form.Group>
              <Form.Label className='text-white'><h4>Youtube yayın linki</h4></Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group className='d-flex gap-2'>
              <Button variant='success'>Yayını Başlat</Button>
              <Button variant='danger'>Yayını Durdur</Button>
            </Form.Group>
          </Form>
        </Col>
        <Col sm={7}>
          <h4 className='text-white'>Canlı Yayın</h4>
          <video width="425" height="283" controls >
            <source src={restaurantPov} type="video/mp4"/>
          </video>
        </Col>
      </Row>
    </Container>
  )
}

export default ManageStream