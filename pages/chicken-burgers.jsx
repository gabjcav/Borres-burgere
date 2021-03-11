import PageTitle from '../components/PageTitle'
import { useState, useEffect } from 'react'
import InfoContainer from '../components/InfoContainer'
import queryFirebase from '../config/firebase'
import MenuSkeleton from '../components/MenuSkeleton'
import { useCart } from '../helper/CartContext'
import { useAuth } from '../helper/context'
import { useRouter } from 'next/router'

const ChickenBurgers = () => {
  const { user, loading, isAuthenticated } = useAuth()
  const router = useRouter()
  const cart = useCart()
  const [chickenBurgers, setChickenBurgers] = useState([])
  const [fbError, setFbError] = useState(null)

  useEffect(() => {
    queryFirebase('food', ['type', '==', 'chickenburger'])
      .then((result) => setChickenBurgers(result.docs))
      .catch((error) => setFbError(error))
  }, [])

  const renderSkeleton = () => {
    return <MenuSkeleton />
  }

  const renderData = () => {
    return (
      <>
        {chickenBurgers && (
          <InfoContainer>
            <h2>Meny</h2>
            {/* "chickenBurgers?." betyr "if(chickenBurgers)" */}
            {chickenBurgers?.map((chickenburger) => {
              //Must have .data() when using firebase
              const cb = chickenburger.data()
              return (
                <div key={cb.id}>
                  <p>{cb.name}</p>
                  <p>{cb.price},-</p>
                  <button
                    onClick={() => {
                      if (!isAuthenticated) {
                        router.push('/login')
                        alert('Logg inn for å handle')
                      }
                      cart.addProductLine({
                        name: cb.name,
                        price: cb.price,
                        id: Math.random() * 100,
                      })
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
      <PageTitle>Kyllingburgere</PageTitle>
      {fbError && (
        <p>
          An error has occured: <pre>{JSON.stringify(fbError, null, 2)}</pre>{' '}
        </p>
      )}
      {chickenBurgers.length === 0 ? renderSkeleton() : renderData()}
    </>
  )
}

export default ChickenBurgers
