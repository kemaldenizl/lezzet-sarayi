import React from 'react'
import { Table } from 'react-bootstrap'
import CreateUserTable from './CreateUserTable'
import johnCena from "../../../assets/johncena.jpg"

function CreateUserContent() {  
    return (
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Görsel</th>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Detaylar</th>
            <th>Düzenle</th>
            <th>Kaldır</th>
          </tr>
        </thead>
        <tbody>
          <CreateUserTable image={johnCena} name="Kemal Deniz" surname="Lağap" mail="kemaldenizlp@gmail.com" phone="05370235036" nationalIdentity="4868*******" role="Müdür" salary="8000" />
        </tbody>
      </Table>
  )
}

export default CreateUserContent