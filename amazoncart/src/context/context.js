import { useContext, useReducer, createContext, useEffect } from "react";
import reducer from './reducer';
import { DELETE_ITEM, SVUOTA_CARRELLO, LOADING_DATA, AUMENTA_QTY, DIMINUISCI_QTY, COSTO_TOTALE, CONTATORE } from "./actions";
import prodotti from "../products";



const initialState = {
    products: [],
    isLoading: true,
    total: 0,
    itemCounter: 0,
};


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const deleteItem = (_id) => {
        dispatch({ type: DELETE_ITEM, payload: _id })
    }

    const deleteAll = () => {
        dispatch({ type: SVUOTA_CARRELLO })
    }

    const addQty = (_id) => {
        dispatch({ type: AUMENTA_QTY, payload: _id })
    }

    const removeQty = (_id) => {
        dispatch({ type: DIMINUISCI_QTY, payload: _id })
    }

    useEffect(() => {
        dispatch({ type: LOADING_DATA, payload: [...prodotti] }
        )
    }, []);

    useEffect(() => {
        dispatch({type: COSTO_TOTALE});
        dispatch({type: CONTATORE});
    }, [state.products]);



    return <AppContext.Provider value={
        {
            ...state,
            deleteItem,
            deleteAll,
            addQty,
            removeQty,

        }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext };