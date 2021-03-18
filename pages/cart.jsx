import CartContainer from '../components/CartContainer'
import { useCart } from '../helper/CartContext'
import Link from 'next/link'
import { useAuth } from '../helper/context'
import { useRouter } from 'next/router'
import { firebaseInstance } from '../config/firebase'
const Cart = () => {
  const cart = useCart()
  const { user, loading, isAuthenticated } = useAuth()
  const router = useRouter()
  if (loading) {
    return <>Loading.....</>
  }

  if (!isAuthenticated) {
    router.push('/login')
  }
  console.log(user, loading, isAuthenticated)
  function handleRemove(id) {
    cart.setProductLines(cart.productLines.filter((item) => item.id !== id))
  }

  function handleOrdrePush() {
    const collection = firebaseInstance.firestore().collection('orders')
    collection
      .doc()
      .set({
        customer: user.uid,
        items: [...cart.productLines],
        completed: false,
        paid: true,
        status: 'preparing',
        orderid: Math.floor(Math.random() * 100),
        time: Date().toLocaleString().slice(16, 24),
        totalprice: cart.total,
      })
      .then(() => {
        console.log('Order added to database')
        cart.setProductLines([])
        router.push('/receipt')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <CartContainer>
      <h1>Handlekurv ({cart.quantity})</h1>
      <div className="line"></div>

      <ul>
        {cart.productLines.map((item) => {
          console.log(cart.productLines)
          return (
            <>
              <li>
                <span id="item-name">{item.name}</span> <span id="item-price">{item.price},-</span>
                <button id="remove-btn" onClick={() => handleRemove(item.id)}>
                  Fjern
                </button>
              </li>
            </>
          )
        })}
      </ul>
      <p id="total">Total: {cart.total},-</p>
      <div id="button-container">
        <button
          onClick={() => {
            handleOrdrePush()
          }}
        >
          Bestill
        </button>
        <Link href="/">
          <button>Tilbake</button>
        </Link>
        <button
          onClick={() => {
            cart.setProductLines([])
          }}
        >
          Tøm
        </button>
      </div>
    </CartContainer>
  )
}

export default Cart
