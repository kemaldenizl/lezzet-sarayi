import { Button } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart } from '../../store/productSlice'
import { useEffect } from "react";


function CartItem({id,product, price, amount}) {

    const paraBirim = useSelector((state) => state.product.paraBirim)
    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deleteCart(id))
    }
  return (
    <>
        <tr key={id}>
            <td>{product}</td>
            <td>{price}{paraBirim}</td>
            <td>{amount}</td>
            <td className="d-grid gap-2"><Button onClick={handleDelete} variant="danger">Sil</Button></td>
        </tr>
    </>
  )
}

export default CartItem