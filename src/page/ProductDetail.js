import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SeenProduct from "../Components/SeenProduct";
import { actionCart } from "../store/cartSlice";
import imgs from '../imgs'
import './productdetail.css'
import Footer from "../Components/Footer"

export default function ProductDetail(){
    const params = useParams()
    const data = useSelector(state => state.dataProduct.value)
    const dispatch = useDispatch()
    const [img, setImg] = useState(data[params.id].img)
    const imgRender = imgs[params.id].map((item, index) => {
        return (
            <img src={item} key={index} onClick={handleImg}></img>
        )
    })

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    function handleImg(event){
        // console.log((event.target.src))
        setImg(event.target.src)
    }

    function addToCart(){
        dispatch(actionCart.increaseCart(data[params.id]))
    }

    return (
        <>
            <div className="product-detail-page">
                <Navbar />
                <div className="product-detail-page-showup-content">
                    <img src={data[params.id].img}></img>
                </div>
                <div className="product-detail-page-main-content">
                    <div className="product-detail-page-cover">
                        <div className="product-detail-page-cover-1">
                            <div className="product-detail-page-cover-2">
                                <div className="product-detail-page-cover-2-img">
                                    <div className="product-detail-images">
                                        {imgRender}
                                    </div>
                                    <div className="product-detail-page-main">
                                        <img src={img}></img>
                                    </div>
                                </div>
                                <div className="product-detail-size">
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
                    <Footer />
                </div>
                <div className="product-detail-btn-cover">
                    <button className="detail-add-btn detail-col-3" onClick={addToCart}><p>ADD TO CART</p></button>
                    <button className="detail-add-btn detail-col-3"><p> CONTACT SHOP</p></button>
                </div>
            </div>
        </>
    )
}