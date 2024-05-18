import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ManageBar from '../../components/Admin/manageBar/ManageBar'
import { Outlet } from 'react-router-dom'

function StaffLayout() {
  return (
    <>
      <Container fluid className="mainImg h-100">
        <Row className="h-100">
          <Col sm={3}><ManageBar admin={false} /></Col>
          <Col sm={9} className="h-100"><Outlet /></Col>
        </Row>
      </Container>
    </>
  )
}

export default StaffLayout