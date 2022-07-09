import { useDispatch, useSelector } from "react-redux";
import { actionCart } from "../store/cartSlice";
import { Link, useSearchParams } from 'react-router-dom'
import { actionCategory } from "../store/categorySlice";
import { actionAside } from "../store/asideSlice";
import './cart.css'
import { useState } from "react";

function Navbar(){
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.amount)
    const productInfor = useSelector(state => state.cart.productInfor)
    const priceAmount = useSelector(state => state.cart.priceAmount)
    const [cartShow, setCartShow] = useState(false)
    const [cartParams, setCartParams] = useSearchParams()
    console.log(cartParams.cart)
    
    function toTop(){
        window.scroll(0,0)
        dispatch(actionAside.reset())
        dispatch(actionCategory.resetPage())
    }
    function handleCart(){
        setCartShow(prev => !prev)
        setCartParams({cart: 'open'})
    }
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
                        <div className="cart-amount-product-icon" onClick={cartIncrease}>
                            <i className="fa-solid fa-plus" id={index} ></i>
                        </div>
                        <input type={'number'} value={priceAmount[index].amount} id={index} onChange={inputvalue} min={0} disabled="disabled"></input>
                        <div className="cart-amount-product-icon" onClick={cartDecrease}>
                            <i className="fa-solid fa-minus" id={index} ></i>
                        </div>
                    </div>
                    <button className="delete-product" onClick={cartDelete} id={index}>delete</button>
                </div>
            </div>)
    })

    return(
        <nav className="navbar">
            <Link to='/products' style={{color:'black', textDecoration: 'none'}}><div className="navbar-shop-name cs" onClick={toTop}>
                <strong>emas</strong></div>
            </Link>
            <div className="navbar-cart-icon">
                <i className="fa-solid fa-cart-shopping cs" onClick={handleCart}><span>{cart}</span></i>
                {/* <div className="navbar-cart-dropdown">
                    <div className="navbar-cart-dropdown-main">
                        {cartProduct}
                    </div>
                    {priceAmount.length > 0 && <p style={{border:'solid 2px black', borderRadius:'10px', backgroundColor: 'white', textAlign:'center'}}>total price: {priceAmount.length && priceAmount.reduce((a, b)=>{
                        return a + b.price
                    }, 0)}</p>}
                </div> */}
                <div className="navbar-slice" style={cartShow?{left:'0'}:{}} >
                    <div className="navbar-slice-main">
                        <div className="navbar-slice-cart" style={cartShow? {right:'0'} :{}}>
                            <div className="navbar-cart-dropdown-main">
                                {cartProduct}
                            </div>
                            <div className="total-price">
                                {priceAmount.length > 0?<div style={{border:'solid 2px black', borderRadius:'10px', backgroundColor: 'white', textAlign:'center'}}>
                                    <p>total price: {priceAmount.length && priceAmount.reduce((a, b)=>{
                                    return a + b.price
                                }, 0)}</p></div> : <span>YOU HAVE NOTHING YET</span>}
                            </div>
                        </div>
                        <div className="navbar-slice-cart-close" onClick={handleCart}><i className="fa-solid fa-x"></i></div>
                    </div>
                </div>
            </div>
        </nav>
    )
    // style={cartShow?{display:'block'}:{display:'none'}}
}

export default Navbar;