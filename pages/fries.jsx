import PageTitle from '../components/PageTitle'
import { useState, useEffect } from 'react'
import queryFirebase from '../config/firebase'
import InfoContainer from '../components/InfoContainer'
import MenuSkeleton from '../components/MenuSkeleton'
import { useCart } from '../helper/cartContext.js'
import { useAuth } from '../helper/context'
import { useRouter } from 'next/router'

const Fries = () => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const cart = useCart()
  const [fries, setFries] = useState([])
  //fbError means Firebase error
  const [fbError, setFbError] = useState(null)

  useEffect(() => {
    queryFirebase('food', ['type', '==', 'fries'])
      .then((result) => setFries(result.docs))
      .catch((error) => setFbError(error))
  }, [])

  const renderSkeleton = () => {
    return <MenuSkeleton />
  }

  const renderData = () => {
    const cartLength = cart.productLines.length
    return (
      <>
        {fries && (
          <InfoContainer>
            <h2>Meny</h2>
            <p id="cart-length">Produkter i handlekurv: {cartLength}</p>
            {/* "fries?." means "if(fries)" */}
            {fries?.map((frie) => {
              //Must have .data() because firebase works like that
              const f = frie.data()
              return (
                <div key={frie.id}>
                  <p>{f.name}</p>
                  <p>{f.price},-</p>
                  <button
                    id={frie.id}
                    onClick={() => {
                      if (!isAuthenticated) {
                        alert('Logg inn for å handle')
                        router.push('/login')
                      } else {
                        cart.addProductLine({
                          name: f.name,
                          price: f.price,
                          id: Math.random() * 100,
                        })
                      }
                    }}
                  >
                    Legg til
                  </button>
                </div>
              )
            })}
          </InfoContainer>
        )}
      </>
    )
  }
  return (
    <>
      <PageTitle>Fries</PageTitle>
      {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
      {fries.length === 0 ? renderSkeleton() : renderData()}
    </>
  )
}

export default Fries
