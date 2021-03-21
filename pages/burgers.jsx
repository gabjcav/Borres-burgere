import PageTitle from '../components/PageTitle'
import { useEffect, useState } from 'react'
import InfoContainer from '../components/InfoContainer'
import queryFirebase from '../config/firebase'
import MenuSkeleton from '../components/MenuSkeleton'
import { useCart } from '../helper/CartContext'
import { useAuth } from '../helper/context'
import { useRouter } from 'next/router'
const Burgers = () => {
  const { user, loading, isAuthenticated } = useAuth()
  const router = useRouter()
  const cart = useCart()
  const [burgers, setBurgers] = useState([])
  const [fbError, setFbError] = useState(null)

  // henter data hver gang side lastes
  useEffect(() => {
    queryFirebase('food', ['type', '==', 'burger'])
      .then((result) => setBurgers(result.docs))
      .catch((error) => setFbError(error))
  }, [])

  const renderSkeleton = () => {
    return <MenuSkeleton />
  }

  const renderData = () => {
    const cartLength = cart.productLines.length
    return (
      <>
        {burgers && (
          <InfoContainer>
            <h2>Meny</h2>
            <p id="cart-length">Produkter i handlekurv: {cartLength}</p>
            {/* "burgers?." means "if(burgers)" */}
            {burgers?.map((burger) => {
              const b = burger.data()
              return (
                <div key={b.id}>
                  <p>{b.name}</p>
                  <p>{b.price},-</p>
                  <button
                    onClick={() => {
                      if (!isAuthenticated) {
                        alert('Logg inn for å handle')
                        router.push('/login')
                      } else {
                        cart.addProductLine({
                          name: b.name,
                          price: b.price,
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
      <PageTitle>Burgere</PageTitle>
      {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
      {burgers.length === 0 ? renderSkeleton() : renderData()}
    </>
  )
}

export default Burgers
