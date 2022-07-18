import { useSearchParams } from "react-router-dom";

export default function Headers(props){
    const [paramSearch, setPramSearch] = useSearchParams()

    return(
        <div className="header">
            <div className="header-main">
                <div className="header-default cs tc"><p>{paramSearch.get('filter') || 'FILTER PRODUCT'}</p></div>
                <div className="header-dropdown">
                    <div className="header-dropdown-list" ref={props.sortListRef}>
                        <p className="tc select-list cs" onClick={(e)=>{
                            if(!paramSearch.get('page')) setPramSearch({filter: e.target.innerHTML})
                            else setPramSearch({page: paramSearch.get('page'),filter: e.target.innerHTML})
                        }}>LOW TO HIGH</p>
                        <p className="tc select-list cs" onClick={(e)=>{
                            if(!paramSearch.get('page')) setPramSearch({filter: e.target.innerHTML})
                            else setPramSearch({page: paramSearch.get('page'),filter: e.target.innerHTML})
                        }}>HIGH TO LOW</p>
                        <p className="tc select-list cs" onClick={(e)=>{
                            if(!paramSearch.get('page')) setPramSearch({filter: e.target.innerHTML})
                            else setPramSearch({page: paramSearch.get('page'),filter: e.target.innerHTML})
                        }}>ON SALE</p>
                        <p className="tc select-list cs" onClick={(e)=>{
                            if(!paramSearch.get('page')) setPramSearch({filter: e.target.innerHTML})
                            else setPramSearch({page: paramSearch.get('page'),filter: e.target.innerHTML})
                        }}>NEW STUFF</p>
                    </div>
                </div>
            </div>
        </div>
    )
}