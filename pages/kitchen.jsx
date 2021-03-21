import { useState, useEffect } from 'react'
import queryFirebase from '../config/firebase'
import OrdersContainer from '../components/OrdersContainer'
import PageTitle from '../components/PageTitle'
import { firebaseInstance } from '../config/firebase'
const Kitchen = () => {
  const [orders, setOrders] = useState(null)
  const [error, setFbError] = useState(null)

  useEffect(() => {
    const OrdersCollection = firebaseInstance
      .firestore()
      .collection('orders')
      .where('completed', '==', null)

    OrdersCollection.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setOrders(items)
    })
  }, [])

  function handleCompleteOrder(ordre) {
    console.log('ordre-id', ordre.id)
    const Collection = firebaseInstance.firestore().collection('orders')
    let document = Collection.doc(`${ordre.id}`)
    console.log('data.id', ordre.id)
    return document
      .update({ completed: new Date().toISOString() })
      .then(() => {
        console.log('order completed')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <OrdersContainer>
      {orders && (
        <div>
          <PageTitle>Bestillinger</PageTitle>
          <div id="container">
            {orders?.map((ordre) => {
              const o = ordre
              const orderId = o.orderid
              return (
                <div className="info" key={ordre.id}>
                  <p>Ordrenr: {orderId}</p>
                  <p>Info: {o.items.name}</p>
                  <p>Tid: {o.time}</p>
                  <p>Total: {o.totalprice},-</p>
                  <button key={ordre.id} onClick={() => handleCompleteOrder(ordre)}>
                    Fullfør
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </OrdersContainer>
  )
}

export default Kitchen
