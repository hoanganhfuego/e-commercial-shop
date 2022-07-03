import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SeenProduct from "../Components/SeenProduct";
import { actionCart } from "../store/cartSlice";
import imgs from '../imgs'
import './productdetail.css'

export default function ProductDetail(){
    const params = useParams()
    const data = useSelector(state => state.dataProduct.value)
    console.log(data)
    const dispatch = useDispatch()
    const imgRender = imgs[0].map((item, index) => {
        return (
            <img src={item} key={index}></img>
        )
    })

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    function addToCart(){
        dispatch(actionCart.increaseCart(data[params.id]))
    }

    return (
        <div className="product-detail-page">
            <div className="product-detail-page-showup-content">
                <img src={data[params.id].img}></img>
            </div>
            <div className="product-detail-page-main-content">
                <Navbar />
                <div className="product-detail-page-cover">
                    <div className="product-detail-page-cover-1">
                        <div className="product-detail-page-cover-2">
                            <div className="product-detail-page-cover-2-img">
                                <div className="product-detail-images">
                                    {imgRender}
                                </div>
                                <div className="product-detail-page-main">
                                    <img src={data[params.id].img}></img>
                                </div>
                            </div>
                            <div>
                                <img src="https://file.hstatic.net/200000018774/file/arcade-01_a6544fda32a5492597a5bfb0a19be92b.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className="product-detail-page-infor-cover">
                        <div className="product-detail-page-infor">
                            <h2>{data[params.id].name}</h2>
                            <h1>{data[params.id].price} đ</h1>
                        </div>
                        <div>
                            <button onClick={addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <SeenProduct />
            </div>
        </div>
    )
}