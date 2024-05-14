import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'

function MenuTable() {
  return (
    <Container fluid className="bg-white d-flex flex-column justify-content-center align-items-center ">
        <Row>
            <Col>İçerik</Col>
            <Col>Fiyat</Col>
            <Col>Gram</Col>
            <Col><Badge>Ekle!</Badge></Col>
        </Row>
    </Container>
  )
}

export default MenuTable