import { Table } from "react-bootstrap"
import OrderTableContent from "./OrderTableContent"

function OrderTable() {
  return (
    <Table striped bordered responsive>
        <thead>
            <tr>
                <th>Ürün</th>
                <th>Miktar</th>
                <th>Müşteri Mesajı</th>
                <th>Sipariş Durumu</th>
                <th>Sipariş Durumunu Güncelle</th>
            </tr>
        </thead>
        <tbody>
            <OrderTableContent content="Hamburger" amount={2} customerMessage="Bir tanesinde domates olmasın diğerinde herşey olsun." />
            <OrderTableContent content="Hamburger" amount={2} customerMessage="Domatez olmasın." />
        </tbody>
    </Table>
  )
}

export default OrderTable