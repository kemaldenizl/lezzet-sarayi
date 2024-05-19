import { Table } from "react-bootstrap"
import LiveTableContent from "./LiveTableContent"

function LiveTable() {
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
                <LiveTableContent product={"hamburger"} price={200} amount={2}/>
            </tbody>
        </Table>
    </>
  )
}

export default LiveTable