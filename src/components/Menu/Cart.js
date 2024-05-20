import { Button, Table, Badge } from "react-bootstrap"
import CartItem from "./CartItem"
import { useDispatch, useSelector } from "react-redux"
import { deleteAllCart, saveTotalPrice } from '../../store/productSlice'


function Cart() {

    const cart = useSelector((state) => state.product.cart)
    const dispatch = useDispatch()
    
    const handleClearAll = () => {
        dispatch(deleteAllCart())
    }

    const allPrice = () => {
        if(cart.length === 0){
            return (<>Lütfen sepete ürün ekleyiniz</>)
        }
        let total =0;
        for(let i = 0; i < cart.length; i++){
            total += cart[i].productPrice 
        }
        dispatch(saveTotalPrice(total))
        return (<>{total}</>)
    }

  return (
    <>
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Ürün</th>
                    <th>Fiyat</th>
                    <th>Miktar</th>
                    <th>Çıkart</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((value, index) => (<CartItem key={index} id={index} product={value.product} price={value.productPrice} amount={value.productAmount} />))                 
                }
            </tbody>
        </Table>
        <h5 className="bg-info rounded border-primary d-flex justify-content-center align-items-center genelPrice text-white">{allPrice()}</h5>
        <div className="d-grid"><Button onClick={handleClearAll} variant="danger">Bütün sepeti temizle</Button></div>
    </>
  )
}

export default Cart