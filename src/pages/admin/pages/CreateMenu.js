import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import CreateMenuContent from '../../../components/Admin/CreateMenu/CreateMenuContent'
import CreateMenuForm from '../../../components/Admin/CreateMenu/CreateMenuForm'

function CreateMenu() {
  return (
    <Container className='h-100 d-flex align-items-center w-100'>
        <Row className='w-100'>
            <Col sm={5}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Ürün Ekle</Accordion.Header>
                    <Accordion.Body>
                        <CreateMenuForm/>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col sm={7}>
                <CreateMenuContent/>
            </Col>
        </Row>
    </Container>
  )
}

export default CreateMenu