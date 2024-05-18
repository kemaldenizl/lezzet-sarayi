import React from 'react'
import {Table } from 'react-bootstrap'
import CreateMenuTable from './CreateMenuTable'
import hamburger from "../../../assets/hamburger.jpg"


function CreateMenuContent() {

  const currency = "₺"
  const miktarBirim ="gr"

  return (
    <Table responsive striped bordered>
      <thead>
        <tr>
          <th>Görsel</th>
          <th>Ürün</th>
          <th>Fiyat</th>
          <th>Ağırlık</th>
          <th>Açıklama</th>
          <th>Düzenle</th>
          <th>Kaldır</th>
        </tr>
      </thead>
      <tbody>
        <CreateMenuTable image={hamburger} content="asd" price={100} amount={150} description="asd" />
      </tbody>
    </Table>
  )
}

export default CreateMenuContent