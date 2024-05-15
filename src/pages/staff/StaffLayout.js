import React from 'react'
import { Container } from 'react-bootstrap'
import ManageBar from '../../components/Admin/manageBar/ManageBar'
import { Outlet } from 'react-router-dom'

function StaffLayout() {
  return (
    <>
      <Container fluid className="mainImg d-flex flex-column justify-content-center align-items-center h-100">
        <ManageBar admin={false} />
        <Outlet />
      </Container>
    </>
  )
}

export default StaffLayout