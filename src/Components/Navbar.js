import { useSelector, useDispatch } from "react-redux/es/exports";
import { actionCart } from "../store/cartSlice";
import { Link } from 'react-router-dom'

function Navbar(){
    function toTop(){
        window.scroll(0,0)
    }
    const cart = useSelector(state => state.cart.amount)
    const productInfor = useSelector(state => state.cart.productInfor)
    const priceAmount = useSelector(state => state.cart.priceAmount)
    const dispatch = useDispatch()

    function cartIncrease(event){
        dispatch(actionCart.cartIncrease(event.target.id))
    }
    function cartDecrease(event){
        dispatch(actionCart.cartDecrease(event.target.id))
    }
    function cartDelete(event){
        dispatch(actionCart.cartDelete(event.target.id))
    }
    function inputvalue(event){
        if(event.target.value) dispatch(actionCart.amountChange({id:event.target.id, value: Number(event.target.value)}))
    }

    const cartProduct = productInfor.map((product, index) => {
        return (
            <div className="navbar-dropdown" key={index}>
                <div className="navbar-cart-dropdown-showcase">
                    <img src={product.img}></img>
                    <div className="navbar-cart-dropdown-showcase-infor">
                        <p>price: {product.price}</p>
                        <p>name: {product.name}</p>
                    </div>
                    <div className="cart-amount-product">
                        <i className="fa-solid fa-circle-plus" id={index} onClick={cartIncrease}></i>
                        <input type={'number'} value={priceAmount[index].amount} id={index} onChange={inputvalue} min={0}></input>
                        <i className="fa-solid fa-circle-minus" id={index} onClick={cartDecrease}></i>
                    </div>
                    <button className="delete-product" onClick={cartDelete} id={index}>delete</button>
                </div>
            </div>)
    })

    return(
        <nav className="navbar">
            <Link to='/products' style={{color:'black', textDecoration: 'none'}}><div className="navbar-shop-name cs" onClick={toTop}><strong>emas</strong></div></Link>
            <ul className="navbar-cart-icon">
                <i className="fa-solid fa-cart-shopping cs"><span>{cart}</span></i>
                <div className="navbar-cart-dropdown">
                    <div className="navbar-cart-dropdown-main">
                        {cartProduct}
                    </div>
                    {priceAmount.length > 0 && <p style={{border:'solid 2px black', borderRadius:'10px', backgroundColor: 'white', textAlign:'center'}}>total price: {priceAmount.length && priceAmount.reduce((a, b)=>{
                        return a + b.price
                    }, 0)}</p>}
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;