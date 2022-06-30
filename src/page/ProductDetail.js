import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import SeenProduct from "../Components/SeenProduct";
import './productdetail.css'

export default function ProductDetail(){
    const productDetail = useSelector(state => state.productDetail)
    const {img, name, price, status, category} = productDetail

    useEffect(()=>{
        window.scroll(0,0)
    },[])
    
    return (
        <div className="product-detail-page">
            <Navbar />
            <div className="product-detail-page-cover">
                <div className="product-detail-page-main">
                    <img src={img}></img>
                </div>
                <div className="product-detail-page-infor">
                    <h1>product name: {name}</h1>
                    <h2>product type: {category}</h2>
                    <h2>status: {status}</h2>
                    <h1>price: {price}</h1>
                </div>
            </div>
            <SeenProduct />
        </div>
    )
}