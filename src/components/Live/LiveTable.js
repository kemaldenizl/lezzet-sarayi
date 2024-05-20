import { Table } from "react-bootstrap"
import LiveTableContent from "./LiveTableContent"
import { useSelector } from "react-redux"

function LiveTable() {

    const cart = useSelector((state) => state.product.cart)

  return (
    <>
        <Table>
            <thead>
                <tr>
                    <th>Ürün</th>
                    <th>Miktar</th>
                    <th>Fiyat</th>
                </tr> 
            </thead>
            <tbody>
                {
                    cart.map((value, index) => (<LiveTableContent key={index} id={index} product={value.product} price={value.productPrice} amount={value.productAmount} />)) 
                }
            </tbody>
        </Table>
    </>
  )
}

export default LiveTable