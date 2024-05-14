import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'

function CreateMenuContent() {
  return (
    <Container fluid className="bg-white d-flex flex-column justify-content-center align-items-center ">
        <Row>
            <Col>İçerik</Col>
            <Col>Fiyat</Col>
            <Col>Gram</Col>
            <Col><Badge bg="danger">Kaldır</Badge></Col>
            <Col><Badge bg="warning">Kaldır</Badge></Col>
        </Row>
    </Container>
  )
}

export default CreateMenuContent