import { useState } from "react"

export default function Headers(props){

    return(
        <div className="header">
            <div className="header-main">
                <div className="header-default cs tc"><p>SORT ITEMS</p></div>
                <div className="header-dropdown">
                    <div className="header-dropdown-list" ref={props.sortListRef}>
                        <p className="tc select-list cs">LOW TO HIGH</p>
                        <p className="tc select-list cs">HIGH TO LOW</p>
                        <p className="tc select-list cs">BEST SELLING</p>
                        <p className="tc select-list cs">ON SALE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}