import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { action } from "../store/dataSlice"
import { actionCategory } from "../store/categorySlice";

export default function Headers(props){
    const category = useSelector(state => state.asideSlice)
    const [sortList, setSortList] = useState('PRODUCT FILTER')

    const dispatch = useDispatch()
    function increase(){
        setSortList('LOW TO HIGH')
        dispatch(action.increase())
        dispatch(actionCategory.resetPage())
        dispatch(actionCategory.reset())
    }
    function decrease(){
        setSortList('HIGH TO LOW')
        dispatch(action.decrease())
        dispatch(actionCategory.resetPage())
        dispatch(actionCategory.reset())
    }
    function onSale(category){
        setSortList('ON SALE')
        dispatch(action.onSale())
        dispatch(actionCategory.resetPage())
        dispatch(actionCategory.reset())
    }
    function onNew(category){
        setSortList('NEW STUFF')
        dispatch(action.onNew())
        dispatch(actionCategory.resetPage())
        dispatch(actionCategory.reset())
    }
    return(
        <div className="header">
            <div className="header-main">
                <div className="header-default cs tc"><p>{sortList}</p></div>
                <div className="header-dropdown">
                    <div className="header-dropdown-list" ref={props.sortListRef}>
                        <p className="tc select-list cs" onClick={increase}>LOW TO HIGH</p>
                        <p className="tc select-list cs" onClick={decrease}>HIGH TO LOW</p>
                        <p className="tc select-list cs" onClick={onSale}>ON SALE</p>
                        <p className="tc select-list cs" onClick={onNew}>NEW STUFF</p>
                    </div>
                </div>
            </div>
        </div>
    )
}