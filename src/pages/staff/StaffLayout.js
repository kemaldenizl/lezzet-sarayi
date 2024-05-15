import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ManageBar from '../../components/Admin/manageBar/ManageBar'
import { Outlet } from 'react-router-dom'

function StaffLayout() {
  return (
    <>
      <Container fluid className="mainImg d-flex flex-column justify-content-center align-items-center h-100">
        <Row>
          <Col md={4}><ManageBar admin={false} /></Col>
          <Col md={8}><Outlet /></Col>
        </Row>
      </Container>
    </>
  )
}

export default StaffLayout