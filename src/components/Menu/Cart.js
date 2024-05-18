import { Table } from "react-bootstrap"
import MenuTableContent from "./MenuTableContent"

function Cart() {

    const paraBirim = "₺"
    const miktarBirim ="gr"

  return (
    <>
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Ürün</th>
                    <th>Fiyat</th>
                    <th>Miktar</th>
                </tr>
            </thead>
            <tbody>
                <MenuTableContent content="Hamburger" price={100} />
                <MenuTableContent content="Pizza" price={110}  />
                <MenuTableContent content="İskender" price={90} />
            </tbody>
        </Table>
    </>
  )
}

export default Cart