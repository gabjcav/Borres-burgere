import { useState, useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import { firebaseInstance } from '../config/firebase'
import RestaurantContainer from '../components/RestaurantContainer'
import { useAuth } from '../helper/context'
import { addMinutes } from 'date-fns'
const OrderStatus = () => {
  const [incompleteOrders, setIncompleteOrders] = useState(null)
  const [completedOrders, setCompletedOrders] = useState(null)
  const { user, isAuthenticated } = useAuth()
  const [currentOrder, setCurrentOrder] = useState(null)

  useEffect(() => {
    const incompleteOrders = firebaseInstance
      .firestore()
      .collection('orders')
      .where('completed', '==', null)

    const completedOrders = firebaseInstance
      .firestore()
      .collection('orders')
      //remove from const after 1 min
      .where('completed', '>', addMinutes(new Date(), -1).toISOString())
    // .startAt(addMinutes(new Date(), -15))

    completedOrders.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setCompletedOrders(items)
    })

    incompleteOrders.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      setIncompleteOrders(items)
      if (user) {
        setCurrentOrder(items.filter((ordre) => ordre.customer === user.uid))
      }
    })
  }, [user])

  return (
    <RestaurantContainer>
      {currentOrder && (
        <PageTitle id="status">
          {currentOrder.length > 1 &&
            `Dine ordrenummere: ${currentOrder.map((i) => i.orderid).join(', ')}`}
          {currentOrder.length === 1 && `Ditt ordrenummer er: ${currentOrder[0]?.orderid}`}
        </PageTitle>
      )}
      <div className="ordre-container">
        <div id="incomplete-container">
          {incompleteOrders && (
            <>
              <h2>Forberedes</h2>
              <div className="container">
                {incompleteOrders?.map((ordre) => {
                  const io = ordre
                  const orderId = io.orderid
                  return (
                    <div className="info" key={ordre.id}>
                      <p>{orderId}</p>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
        <div id="complete-container">
          {completedOrders && (
            <>
              <h2>Ferdige</h2>
              <div className="container">
                {completedOrders?.map((ordre) => {
                  const io = ordre
                  const orderId = io.orderid
                  return (
                    <div className="info" key={ordre.id}>
                      <p>{orderId}</p>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </RestaurantContainer>
  )
}

export default OrderStatus
