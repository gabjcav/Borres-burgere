import PageTitle from '../components/PageTitle'
import { useState, useEffect } from 'react'
import queryFirebase from '../config/firebase'
import InfoContainer from '../components/InfoContainer'
import MenuSkeleton from '../components/MenuSkeleton'
import { useCart } from '../helper/CartContext'
const Drinks = () => {
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
    return (
      <>
        {drinks && (
          <InfoContainer>
            <h2>Meny</h2>
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
                      cart.addProductLine({
                        name: d.name,
                        price: d.price,
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
      <PageTitle>Drikke</PageTitle>
      {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
      {drinks.length === 0 ? renderSkeleton() : renderData()}
    </>
  )
}

export default Drinks
