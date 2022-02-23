import {
    DELETE_ITEM,
    SVUOTA_CARRELLO,
    LOADING_DATA,
    AUMENTA_QTY,
    DIMINUISCI_QTY,
    COSTO_TOTALE,
    CONTATORE,
} from "./actions";


const reducer = (state, { type, payload }) => {
    if (type === LOADING_DATA) {
        return {
            ...state, products: payload.map(el => {
                return { ...el, qty: el.qty }
            })
        }
    }
    if (type === SVUOTA_CARRELLO) {
        return { ...state, products: [] }
    }
    if (type === DELETE_ITEM) {
        return {
            ...state, products: state.products.filter((el) => el._id !== payload)
        }
    }
    if (type === AUMENTA_QTY) {
        return {
            ...state,
            products: state.products.map((el) => {
                if (payload === el._id) {
                    return { ...el, qty: el.qty + 1 }
                }
                return {...el}
            })
        }
    }
    if (type === DIMINUISCI_QTY) {
        return {
            ...state,
            products: state.products.map((el) => {
                if (payload === el._id) {
                    return { ...el, qty: el.qty - 1 }
                }
                return {...el}
            })
        }
    }
    if(type === COSTO_TOTALE){
        return{
            ...state, total: state.products.reduce((accumulatore, item) => { return accumulatore + item.qty * item.price }, 0)
        }
    }
    if(type === CONTATORE){
        return{
            ...state, itemCounter: state.products.reduce((totalItem, item) => { return totalItem + item.qty }, 0)
        }
    }

    return state;
};

export default reducer;