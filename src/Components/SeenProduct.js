import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './seenproduct.css'

export default function SeenProduct(){
    const ref = useRef()
    const seenProduct = useSelector(state => state.seenProduct)
    const seenProductRender = seenProduct.map((item, index )=> {
        return (
            <div className="seen-single-product" key={index} onClick={handleProductdetail}>
                <Link to={`/productdetail/${item.id}/${item.name}`} style={{color:'black'}}>
                    <img src={item.img}></img>
                    {/* <div className="seen-single-product-content"> */}
                    <p>{item.name}</p>
                    {/* </div> */}
                </Link>
            </div>
        )
    })

    function handleProductdetail(){
        console.log(seenProduct)
    }

    function transitionLeftFn(){
        // ref.current.style.right = '-100px'
        // document.querySelector('#seenProduct').style.left = `${transitionLeft - 239}px`
        // setTransitionLeft(prev => prev-239)
    }

    function transitionRightFn(){
        // ref.current.style.right = '-100px'
        // document.querySelector('#seenProduct').style.left = `${transitionLeft + 239}px`
        // setTransitionLeft(prev => prev+239)
    }

    return(
        <>
            <div className="seen-products-cover">
                <h1>Seen products</h1>
                {/* <i className="fa-solid fa-chevron-left" onClick={transitionLeftFn} style={seenProduct.length>0? {display:'block'}:{display:'none'}}></i> */}
                {/* <div className="seen-products-overlay"> */}
                <div className="seen-products scroll4" id='seenProduct' style={seenProduct.length? {display: 'flex'}:{display:'none'}}>
                    {seenProductRender}
                </div>
                {/* </div> */}
                {/* <i className="fa-solid fa-chevron-right" onClick={transitionRightFn} style={seenProduct.length>0? {display:'block'}:{display:'none'}}></i> */}
            </div>
        </>
    )
}
// style={transition? {transform: 'translateX(-239px)'} : {color:'black'}}