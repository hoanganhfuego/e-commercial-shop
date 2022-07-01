import Aside from "../Components/Aside";
import Products from "../Components/Products";
import Header from "../Components/Header";
import { useRef, useState } from "react";
import data from "../data";

export default function ProductsCase(){
    const defaultValue = {
        allproduct: true,
        tshirt: false,
        short: false,
        jean: false,
        shirt: false,
    }
    const [categoryType, setCategoryType] = useState({
        value: '',
        choose: defaultValue
    })
    const sortListRef = useRef()

    function handleClick(event){
        let categoryName = event.target.innerHTML
        if(categoryName == 'all products') setCategoryType({value:'', choose: {...defaultValue}})
        if(categoryName == 't-shirt') setCategoryType({value:'tshirt', choose: {...defaultValue, allproduct: false, tshirt: true}})
        if(categoryName == 'short') setCategoryType({value:'short', choose: {...defaultValue, allproduct: false,short: true}})
        if(categoryName == 'jean') setCategoryType({value:'jean', choose: {...defaultValue, allproduct: false,jean: true}})
        if(categoryName == 'shirt') setCategoryType({value:'shirt', choose: {...defaultValue, allproduct: false,shirt: true}})
    }

    return(
        <>
            <Header 
                sortListRef = {sortListRef}
            />
            <div className="body-main-content">
                <Aside
                    handleClick ={handleClick} 
                    isChoose = {categoryType.choose}
                    data = {data}
                />
                <Products 
                    categoryType = {categoryType.value}
                />      
            </div>
        </>
    )
}