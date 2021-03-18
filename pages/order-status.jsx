import { useState, useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import queryFirebase from '../config/firebase'

const OrderStatus = () => {
  const [incompleteOrders, setIncompleteOrders] = useState(null)
  const [completedOrders, setCompletedOrders] = useState(null)

  useEffect(() => {
    queryFirebase('orders', ['status', '==', 'preparing'])
      .then((result) => setIncompleteOrders(result.docs))
      .catch((error) => setFbError(error))
  }, [])
  useEffect(() => {
    queryFirebase('orders', ['status', '==', 'completed'])
      .then((result) => setCompletedOrders(result.docs))
      .catch((error) => setFbError(error))
  }, [])

  return (
    <div>
      <div>
        {incompleteOrders && (
          <>
            <PageTitle>Gjøres klare</PageTitle>
            {incompleteOrders?.map((ordre) => {
              const io = ordre.data()
              const orderId = io.orderid
              return (
                <div className="info" key={ordre.id}>
                  <p>{orderId}</p>
                </div>
              )
            })}
          </>
        )}
      </div>
      <div>
        {completedOrders && (
          <>
            <PageTitle>Ferdige</PageTitle>
            {completedOrders?.map((ordre) => {
              const io = ordre.data()
              const orderId = io.orderid
              return (
                <div className="info" key={ordre.id}>
                  <p>{orderId}</p>
                </div>
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}

export default OrderStatus
