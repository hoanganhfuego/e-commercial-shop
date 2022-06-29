import { useDispatch } from "react-redux";
import { action } from "../store/cartSlice";

function Product(props){
    const dispatch = useDispatch()
    const {id, name, price, img, status, category} = props

    function addToCart(){
        dispatch(action.increaseCart(props))
    }
   
    return(
        <div key={id} name={name} className='product col-3'>
            <div className="product-img-btn">
                <div className="product-img">
                    <span>{status}</span>
                    <img src={img}></img>
                </div>
                <div className="product-btn row">
                    <button className="btn col-2 cs" onClick={addToCart} id={id}>add to cart</button>
                    <button className="btn2 btn col-2 cs">buy now</button>
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