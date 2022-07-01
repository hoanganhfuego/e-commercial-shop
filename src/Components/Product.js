import { useDispatch, useSelector } from "react-redux";
import { actionCart } from "../store/cartSlice";
import { actionSeen } from "../store/seenProduct";
import { Link } from 'react-router-dom'
import { actionProductDetail } from "../store/productDetail";

function Product(props){
    const seenProduct = useSelector(state => state.seenProduct)
    const dispatch = useDispatch()
    const {id, name, price, img, status, category} = props

    function addToCart(){
        dispatch(actionCart.increaseCart(props))
    }
    function checkProductDetail(){
        dispatch(actionSeen.addToSeenProduct(props))
        dispatch(actionProductDetail.openProductDetail(props))
    }
   
    return(
        <div key={id} name={name} className='product'>
            <div className="product-img-btn">
                <div className="product-img">
                    <span>{status}</span>
                    <img src={img}></img>
                </div>
                <div className="product-btn row">
                    <button className="btn col-2 cs" onClick={addToCart} id={id}>add to cart</button>
                    <Link to='/productdetail' style={{color:'black'}}><button className="btn2 btn col-2 cs" onClick={checkProductDetail}>more detail</button></Link>
                </div>
            </div>
            <div className="product-detail tc">
                <h2>{category}</h2>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Product;