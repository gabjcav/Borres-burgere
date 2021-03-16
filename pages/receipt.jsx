import { ReceiptContainer } from '../components/ReceiptContainer'
import { useCart } from '../helper/CartContext'

const Receipt = () => {
  const cart = useCart()

  return (
    <ReceiptContainer>
      <h1>Kvittering</h1>
      <div className="line"></div>

      <ul></ul>
    </ReceiptContainer>
  )
}

export default Receipt
