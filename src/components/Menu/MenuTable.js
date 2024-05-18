import React from 'react'
import { Badge, Col, Container, Row, Table } from 'react-bootstrap'
import MenuTableContent from './MenuTableContent'
import hamburger from "../../assets/hamburger.jpg"

function MenuTable() {

  const currency = "₺"
  const miktarBirim ="gr"

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Ürün</th>
          <th>Fiyat</th>
          <th>Ağırlık</th>
          <th>Sepete Ekle</th>
        </tr>
      </thead>
      <tbody>
        <MenuTableContent image={hamburger} content="Hamburger" price={100} amount={`150${miktarBirim}`} currency={currency} description="açıklama" add />
        <MenuTableContent content="Pizza" price={110} amount={`140${miktarBirim}`} currency={currency} description="açıklama" add />
        <MenuTableContent content="İskender" price={90} amount={`145${miktarBirim}`} currency={currency} description="açıklama" add />
        <MenuTableContent content="Makarna" price={70} amount={`130${miktarBirim}`} currency={currency} description="açıklama" add />
        <MenuTableContent content="Kebap" price={100} amount={`125${miktarBirim}`} currency={currency} description="açıklama" add />
      </tbody>
    </Table>
  )
}

export default MenuTable