import CartContainer from '../components/CartContainer';

const Cart = () => {
    return (
        <CartContainer>
            <h1>Handlekurv</h1>
            <div className="line"></div>
            <ul>
                <li>
                    <p>navn</p>
                </li>
                <li>
                    <p>pris</p>
                </li>
                <li>
                    <button>Fjern</button>
                </li>
            </ul>
        </CartContainer>
    )
}

export default Cart; 