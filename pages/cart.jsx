import CartContainer from '../components/CartContainer'
import { useCart } from '../helper/CartContext'
import Link from 'next/link'
const Cart = () => {
  const cart = useCart()
  const cartChecker = () => {
    if (cart.productLines.length < 0) {
      console.log('cart is empty')
    }
  }
  return (
    <CartContainer>
      <h1>Handlekurv</h1>
      <div className="line"></div>

      <ul>
        {cart.productLines.map((item) => {
          return (
            <li>
              <span id="item-name">{item.name}</span> <span id="item-price">{item.price},-</span>
            </li>
          )
        })}
      </ul>
      <p id="total">Total: {cart.total},-</p>
      <div id="button-container">
        <button>Betal</button>
        <Link href="/">
          <button>Tilbake</button>
        </Link>
        <button>Tøm</button>
      </div>
    </CartContainer>
  )
}

export default Cart
