import { useCart } from '../../helper/cartContext'

const Test = () => {
  const cart = useCart()

  return (
    <>
      <div>{cart.quantity}</div>
    </>
  )
}

export default Test
