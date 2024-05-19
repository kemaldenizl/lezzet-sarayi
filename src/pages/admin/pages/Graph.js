import React from 'react'
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import LineGraph from '../../../components/Admin/Graph/LineGraph'
import "../../../styles/admin/graph.css"

//className='h-100 d-flex flex-column align-items-center w-100 align-items-center justify-content-center gap-4'
//className='justify-content-center gap-4'
function Graph() {
  return (
    <>
      <Container className='d-flex w-100 h-100 align-items-center' >
        <Row className='graph'>
          <Col sm="3">
            <DropdownButton title="Grafik Çeşidi Seçiniz" id="bg-nested-dropdown">
              <Dropdown.Item eventKey="1">Kar</Dropdown.Item>
              <Dropdown.Item eventKey="2">Zarar</Dropdown.Item>
              <Dropdown.Item eventKey="2">Masa doluluk</Dropdown.Item>
              <Dropdown.Item eventKey="2">Çalışan performans</Dropdown.Item>
              <Dropdown.Item eventKey="2">Malzeme kullanım</Dropdown.Item>
            </DropdownButton>    
          </Col>
          <Col sm="2">
            <DropdownButton title="Aralık Seçiniz" id="bg-nested-dropdown">
              <Dropdown.Item eventKey="10">Günlük</Dropdown.Item>
              <Dropdown.Item eventKey="11">Haftalık</Dropdown.Item>
              <Dropdown.Item eventKey="11">Aylık</Dropdown.Item>
              <Dropdown.Item eventKey="11">Yıllık</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col Col className='bg-white graph' sm="6">
            <LineGraph/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Graph