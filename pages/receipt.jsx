import { ReceiptContainer } from '../components/ReceiptContainer'

const Receipt = () => {
  const [order, setOrder] = useState(null)

  useEffect(() => {
    queryFirebase('orders', ['completed', '==', true])
      .then((result) => setOrder(result.docs))
      .catch((error) => setFbError(error))
  }, [])

  return (
    <ReceiptContainer>
      <h1>Bekreftelse</h1>
      <div className="line"></div>
      <p>Takk for ditt kjøp</p>
    </ReceiptContainer>
  )
}

export default Receipt
