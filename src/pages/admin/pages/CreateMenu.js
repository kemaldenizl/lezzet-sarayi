import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import CreateMenuContent from '../../../components/Admin/CreateMenu/CreateMenuContent'
import CreateMenuForm from '../../../components/Admin/CreateMenu/CreateMenuForm'

function CreateMenu() {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center'>
        <Row>
            <Col>
                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Ürün Ekle</Accordion.Header>
                    <Accordion.Body>
                        <CreateMenuForm/>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
        <Row className='my-3'>
            <Col><CreateMenuContent/></Col>
        </Row>
    </Container>
  )
}

export default CreateMenu