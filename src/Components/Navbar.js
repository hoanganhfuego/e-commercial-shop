import { useDispatch, useSelector } from "react-redux";
import { actionCart } from "../store/cartSlice";
import { Link } from 'react-router-dom'
import { actionCategory } from "../store/categorySlice";
import { actionAside } from "../store/asideSlice";
import {action} from "../store/dataSlice"
import './cart.css'
import { useEffect, useState } from "react";
import Product from "./Product";

function Navbar(){
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.amount)
    const productInfor = useSelector(state => state.cart.productInfor)
    const priceAmount = useSelector(state => state.cart.priceAmount)
    const [cartShow, setCartShow] = useState(false)
    
    function toTop(){
        window.scroll(0,0)
        dispatch(actionAside.reset())
        dispatch(actionCategory.resetPage())
    }
    function handleCart(){
        setCartShow(prev => !prev)
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
    const [isChoose, setIsChoose] = useState(false)
    const mainData = useSelector(state => state.dataProduct.value)
    const [searchValue, setSearchValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    function handleInput(event){
        setSearchValue(event.target.value.toLowerCase())
    }
    function handleDispatch(){
        dispatch(action.search(searchValue))
    }
    useEffect(()=>{
        const navbarInput = document.querySelector('.App')
        navbarInput.addEventListener('click', (e)=>{
            const element = e.target.className
            if(element == 'navbar-input-input') setIsChoose(true)
            else setIsChoose(false)
        })

        if(searchValue) 
        {setInputValue(mainData.filter((item, index)=>{
            return item.name.toLowerCase().includes(searchValue)
        }))}
        else setInputValue('')
    }, [searchValue])
    
    return(
        <nav className="navbar" >
            <Link to='/products/all-collection' style={{color:'black', textDecoration: 'none'}}>
                <div className="navbar-shop-name cs" onClick={toTop}>
                    <strong>emas</strong>
                </div>
            </Link>

            {/*  */} 
            {/*  */}

            <div className="navbar-cart-icon">
                <div className="navbar-input" >
                    <div className="navbar-input-search-bar">
                        <input onChange={handleInput} className="navbar-input-input" style={(isChoose)?{width:'200px'}:{}}></input>
                        <Link to={`/search?search=${searchValue}`} onClick={handleDispatch}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Link>
                    </div>
                    <div className="navbar-input-search-items scroll4" style={(inputValue.length>3 && isChoose)?{overflowY: "scroll"}:{}}>
                        {inputValue && isChoose &&
                            inputValue.map((product, index)=>{
                                const {id, name, price, img, status, category} = product
                                return (
                                    <Product
                                        key = {index}
                                        id = {id}
                                        name = {name}
                                        img = {img}
                                        price = {price}
                                        status = {status}
                                        category = {category}
                                    />
                                )
                            }
                        )}
                    </div>
                </div>
                <i className="fa-solid fa-cart-shopping cs" onClick={handleCart}><span>{cart}</span></i>
                <div className="navbar-slice" style={cartShow?{display:'block', right:'0'}:{}} >
                    <div className="navbar-slice-main">
                        {/* <div className="navbar-slice-cart-close" onClick={handleCart}>
                            <i className="fa-solid fa-angles-right" placeholder='xin chao'></i>
                        </div> */}
                        <div className="navbar-slice-cart" style={cartShow? {display:'block', right:'0'} :{}}>
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
                        <div className="navbar-slice-cart-handle" onClick={handleCart}></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;