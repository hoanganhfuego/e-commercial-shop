import Navbar from "../Components/Navbar";
import Aside from "../Components/Aside";
import Products from "../Components/Products";
import Header from "../Components/Header";
import SeenProduct from "../Components/SeenProduct";
import { useEffect } from "react";

export default function ProductShowCase(){
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <div className="main-body">
            <Navbar />
            <Header/>
            <div className="body-main-content">
                <Aside/>
                <Products />      
            </div>
            <SeenProduct />
        </div>
    );
}