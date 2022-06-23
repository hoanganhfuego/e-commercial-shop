import Navbar from "./Components/Navbar";
import Aside from "./Components/Aside";
import Products from "./Components/Products";
import Header from "./Components/Header";
import { useEffect, useRef, useState } from "react";
import data from "./data";

function App() {
  const sortList = {
    lowToHigh: false,
    highToLow: false,
    onSale: false,
    bestSelling: false
  }
  const [categoryType, setCategoryType] = useState('')
  const [sortListCurrent, setSortListCurrent] = useState(sortList)
  const sortListRef = useRef()

  useEffect(() => {
    const sortListP = sortListRef.current.childNodes 
    console.log(sortListP)
    sortListP.forEach(listP => {
      listP.addEventListener("click", item => {
        console.log(item.target)
      })
    })
  }, [])
  // tao state thay doi theo category duoc chon
  // sap xep state theo selection
  // git push len github
  // tao gio hang

  function handleClick(event){
    let categoryName = event.target.innerHTML
    if(categoryName == 'all products') setCategoryType('')
    if(categoryName == 't-shirt') setCategoryType('tshirt')
    if(categoryName == 'short') setCategoryType('short')
    if(categoryName == 'jean') setCategoryType('jean')
    if(categoryName == 'shirt') setCategoryType('shirt')
  }

  function handleClickSortItems(event){
    console.log(event.target)
  }

  return (
    <div className="main-body">
      <Navbar />
      <Header 
        sortListRef = {sortListRef}
      />
      <div className="display-section">
        <Aside 
          handleClick = {handleClick}
          data = {data}
        />
        <Products 
          categoryType = {categoryType}
        />
      </div>
    </div>
  );
}

export default App;
