import Navbar from "../Components/Navbar";
import ProductsCase from "./ProductsCase";
import SeenProduct from "../Components/SeenProduct";
import { useEffect } from "react";

export default function ProductShowCase(){
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <div className="main-body">
            <Navbar />
            <ProductsCase />
            <SeenProduct />
        </div>
    );
}