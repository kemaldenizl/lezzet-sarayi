function LiveTableContent({product,amount,price}) {
  return (
    <>
        <tr>
            <td>{product}</td>
            <td>{amount}</td>
            <td>{price}</td>
        </tr>
    </>
  )
}

export default LiveTableContent