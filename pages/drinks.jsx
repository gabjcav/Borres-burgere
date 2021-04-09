import PageTitle from '../components/PageTitle'
import { useState, useEffect } from 'react'
import queryFirebase from '../config/firebase'
import InfoContainer from '../components/InfoContainer'
import MenuSkeleton from '../components/MenuSkeleton'
import { useCart } from '../helper/cartContext.js'
import { useAuth } from '../helper/context'
import { useRouter } from 'next/router'
const Drinks = () => {
  const { user, loading, isAuthenticated } = useAuth()
  const router = useRouter()

  const cart = useCart()
  const [drinks, setDrinks] = useState([])
  //fbError means Firebase error
  const [fbError, setFbError] = useState(null)

  useEffect(() => {
    queryFirebase('food', ['type', '==', 'drink'])
      .then((result) => setDrinks(result.docs))
      .catch((error) => setFbError(error))
  }, [])

  const renderSkeleton = () => {
    return <MenuSkeleton />
  }

  const renderData = () => {
    const cartLength = cart.productLines.length
    return (
      <>
        {drinks && (
          <InfoContainer>
            <h2>Meny</h2>
            <p id="cart-length">Produkter i handlekurv: {cartLength}</p>
            {/* "drinks?." means "if(drinks)" */}
            {drinks?.map((drink) => {
              //Must have .data() because firebase works like that
              const d = drink.data()
              return (
                <div key={d.id}>
                  <p>{d.name}</p>
                  <p>{d.price},-</p>
                  <button
                    onClick={() => {
                      if (!isAuthenticated) {
                        router.push('/login')
                        alert('Logg inn for å handle')
                      } else {
                        cart.addProductLine({
                          name: d.name,
                          price: d.price,
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
      <PageTitle>Drikke</PageTitle>
      {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
      {drinks.length === 0 ? renderSkeleton() : renderData()}
    </>
  )
}

export default Drinks
