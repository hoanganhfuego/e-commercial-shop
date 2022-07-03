export const reducers = {
    newData(state, action){
        if(action.payload == 'all products') return {...state, newValue: state.value}
        if(action.payload == 't-shirt') return {...state, newValue: state.value.filter(item => item.category == 'tshirt')}
        if(action.payload == 'short') return {...state, newValue: state.value.filter(item => item.category == 'short')}
        if(action.payload == 'jean') return {...state, newValue: state.value.filter(item => item.category == 'jean')}
        if(action.payload == 'shirt') return {...state, newValue: state.value.filter(item => item.category == 'shirt')}
    },
    increase(state, action){
        return {...state, newValue: state.newValue.slice().sort((a, b) => (a.price - b.price))}
    },
    decrease(state, action){
        return {...state, newValue: state.newValue.slice().sort((a, b) => (b.price - a.price))}
    },
    onSale(state, action){
        return {...state, newValue: state.newValue.filter(item => item.status == 'sale')}
    },
    onNew(state, action){
        return {...state, newValue: state.newValue.filter(item => item.status == 'new')}
    },
}

export const reducerCart = {
    increaseCart(state, action){
        return (state.productID.includes(action.payload.id)? 
        {...state}:
        {...state,
        productADD: true, 
        amount: state.amount+1, productID: [...state.productID, action.payload.id], 
        productInfor:[...state.productInfor, action.payload], 
        priceAmount:[...state.priceAmount, {price: action.payload.price, amount: 1, id:action.payload.id}]})
    },
    cartIncrease(state, action){
        return {...state, priceAmount: state.priceAmount.map((item, index)=>{
            return action.payload == index? {
                price: state.productInfor[index].price*(item.amount+1), amount: item.amount+1
            }:{...item}
        })}
    },
    cartDecrease(state, action){
        return {...state, priceAmount: state.priceAmount.map((item, index)=>{
            return action.payload == index? {
                price: state.productInfor[index].price*(item.amount-1), amount: item.amount-1
            }:{...item}
        })}
    },
    cartDelete(state, action){
        return {...state, priceAmount: state.priceAmount.filter((item, index)=>
            action.payload != index
        ), productInfor: state.productInfor.filter((item, index)=>
            action.payload != index
        ), amount: state.amount -1}
    },
    amountChange(state, action){
        return{...state, priceAmount: 
            state.priceAmount.map((item, index)=>{
                return (action.payload.id == index?
                {
                    price: state.productInfor[index].price*action.payload.value,
                    amount: action.payload.value}:
                {...item})
            })}
    }
}

export const reducersSeenProduct = {
    addToSeenProduct(state, action){
        return state.some(item => item.id == action.payload.id)?
        [...state]:[action.payload, ...state]
    },

}

export const reducersProductDetail = {
    openProductDetail(state, action){
        return action.payload
    }
}

export const reducersAside = {
    changeCategory(state, action){
        if(action.payload == 't-shirt') return {
            allproduct: false,
            tshirt: true,
            short: false,
            jean: false,
            shirt: false,
        }
        if(action.payload == 'short') return {
            allproduct: false,
            tshirt: false,
            short: true,
            jean: false,
            shirt: false,
        }
        if(action.payload == 'jean') return {
            allproduct: false,
            tshirt: false,
            short: false,
            jean: true,
            shirt: false,
        }
        if(action.payload == 'shirt') return {
            allproduct: false,
            tshirt: false,
            short: false,
            jean: false,
            shirt: true,
        }
        else return {
            allproduct: true,
            tshirt: false,
            short: false,
            jean: false,
            shirt: false,    
        }
    }
}

export const categoryReducers = {
    changePage(state, action){
        return {...state, value:((parseInt(action.payload)+1)*6 - 6)}
    },
    reset(state, action){
        return {...state, value: 0}
    },
    resetPage(state, action){
        return {...state, isChoose: [false, true, true, true, true, true]}
    },
    changePageNumber(state, action){
        return {...state, isChoose: state.isChoose.map((item, index) => {
            return index == action.payload? false: true
        })}
    }
}