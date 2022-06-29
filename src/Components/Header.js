import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { action } from "../store/dataSlice"

export default function Headers(props){
    const [sortList, setSortList] = useState('SORT ITEMS')

    const dispatch = useDispatch()
    function increase(){
        setSortList('LOW TO HIGH')
        dispatch(action.increase())
    }
    function decrease(){
        setSortList('HIGH TO LOW')
        dispatch(action.decrease())
    }
    function reset(){
        setSortList('SORT ITEMS')
        dispatch(action.reset())
    }
    function onSale(){
        setSortList('ON SALE')
        dispatch(action.onSale())
    }
    return(
        <div className="header">
            <div className="header-main">
                <div className="header-default cs tc"><p>{sortList}</p></div>
                <div className="header-dropdown">
                    <div className="header-dropdown-list" ref={props.sortListRef}>
                        <p className="tc select-list cs" onClick={reset}>DEFAULT</p>
                        <p className="tc select-list cs" onClick={increase}>LOW TO HIGH</p>
                        <p className="tc select-list cs" onClick={decrease}>HIGH TO LOW</p>
                        <p className="tc select-list cs" onClick={onSale}>ON SALE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}