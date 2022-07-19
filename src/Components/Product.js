import { useDispatch, useSelector } from "react-redux";
import { actionCart } from "../store/cartSlice";
import { actionSeen } from "../store/seenProduct";
import { Link } from 'react-router-dom'
import { actionProductDetail } from "../store/productDetail";

function Product(props){
    const dispatch = useDispatch()
    const {id, name, price, img, status, category} = props

    function addToCart(){
        dispatch(actionCart.increaseCart(props))
    }
    function checkProductDetail(event){
        if(event.target.class != 'btn col-2 cs'){ dispatch(actionSeen.addToSeenProduct(props))}
    }
   
    return(
        <div key={id} name={name} className='product'>
            <div className="product-img-btn" >
                <Link to={`/productdetail/${id}/${name}`}>
                    <div className="product-img">
                        <span>{status}</span>
                        <img src={img} onClick={checkProductDetail}></img>
                    </div>
                </Link>
                <div className="product-btn row">
                    <button className="btn col-2 cs" onClick={addToCart} id={id}>add to cart</button>
                    <Link to={`/productdetail/${id}/${name}`} style={{color:'black'}}><button className="btn2 btn col-2 cs" onClick={checkProductDetail}>more detail</button></Link>
                </div>
            </div>
            <Link to={`/productdetail/${id}/${name}`}>
                <div className="product-detail tc">
                    <h2>{name}</h2>
                    <h3>{price}</h3>
                </div>
            </Link>
        </div>
    )
}

export default Product;