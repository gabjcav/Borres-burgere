import { useState, useEffect } from 'react'
import queryFirebase from '../config/firebase'
import OrdersContainer from '../components/OrdersContainer'
import PageTitle from '../components/PageTitle'
import { firebaseInstance } from '../config/firebase'
const Kitchen = () => {
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    queryFirebase('orders', ['status', '==', 'preparing'])
      .then((result) => setOrders(result.docs))
      .catch((error) => setFbError(error))
  }, [])

  return (
    <OrdersContainer>
      {orders && (
        <div>
          <PageTitle>Bestillinger</PageTitle>
          <div id="container">
            {orders?.map((ordre) => {
              console.log(ordre)
              const o = ordre.data()
              const orderId = o.orderid
              return (
                <div className="info" key={ordre.id}>
                  <p>Ordrenr: {orderId}</p>
                  <p>Info: {o.items.name}</p>
                  <p>Tid: {o.time}</p>
                  <p>Total: {o.totalprice},-</p>
                  <button
                    key={ordre.id}
                    onClick={() => {
                      const Collection = firebaseInstance.firestore().collection('orders')
                      let document = Collection.doc(`${ordre.id}`)
                      console.log('data.id', ordre.id)
                      return document
                        .update({ status: 'completed' })
                        .then(() => {
                          console.log('order completed')
                        })
                        .catch((error) => {
                          console.log(error)
                        })
                    }}
                  >
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
