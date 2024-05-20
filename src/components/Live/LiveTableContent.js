function LiveTableContent({id,product,amount,price}) {
  return (
    <>
        <tr key={id}>
            <td>{product}</td>
            <td>{amount}</td>
            <td>{price}</td>
        </tr>
    </>
  )
}

export default LiveTableContent