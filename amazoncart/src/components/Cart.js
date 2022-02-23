import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "../context/context";

const Cart = () => {
    const {...state} = useGlobalContext();
    return (
        <section className="section-center px-3">
            <h2>Carrello</h2>
            <p>Deseleziona tutti gli articoli</p>
            <p className="d-flex px-5 justify-content-end">Prezzo</p>
            <hr />
            <section className="cart-section">
                {
                    state.products.map(el => {
                        return(
                        <div className="d-flex align-items-center px-3">
                        <input type="checkbox" />
                        <CartItem key={el._id} {...el} />
                        </div>
                        )
                    })
                }
            </section>
        </section>
    );
};

export default Cart;