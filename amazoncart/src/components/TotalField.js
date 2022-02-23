import React from "react";
import { useGlobalContext } from "../context/context";

const TotalField = () => {
    const { total, itemCounter } = useGlobalContext()
    return (
        <section className="total-section section-center">
            <div className="card" id="totalField">
                <div className="card-content">
                    <p className='text-start'>Totale provvisorio ({itemCounter} articoli): <span className="bold">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(total)}</span></p>
                    <button className="btn" id="yellow-button">Procedi all'ordine</button>
                </div>
            </div>
        </section>
    )
}
export default TotalField;