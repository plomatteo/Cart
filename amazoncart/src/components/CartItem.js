import React from "react";
import { MdDelete } from 'react-icons/md';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { useGlobalContext } from "../context/context";

const CartItem = ({ _id, name, image, price, qty, countInStock }) => {
    const { deleteItem, addQty, removeQty } = useGlobalContext();

    const addItem = (_id) => {
        if(qty+1 > countInStock){
            return
        }
        return addQty(_id)
    }

    const removeItem = (_id) => {
        if(qty-1 < 0 ){
            return
        }
        return removeQty(_id)
    }
    
    return (<article className="cart-item">
        <div className="img-container">
            <img src={image} alt="prodotto" className="img" />
        </div>
        <p className="prd-name">{name}</p>
        <div className="qty-selector">
            <button className="btn icon-btn">
                <BiPlus className="icon" onClick={() => addItem(_id)}/>
            </button>
            <p>{qty}</p>
            <button className="btn icon-btn">
                <BiMinus className="icon minus-icon" onClick={() => removeItem(_id)} />
            </button>
        </div>
            <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}</p>
            <button className="btn icon-btn" onClick={() => deleteItem(_id)}>
                <MdDelete className="icon minus-icon" />
            </button>
    </article >
    );
}

export default CartItem;