import React from "react";
import "../ItemCount/ItemCount.css"

const ItemCount = ({ stock, value, onAdd, onSubstract }) => {



    return (
        <>
            <div>
            <p>Stock:{stock}</p>
                {stock
                    ?
                    <div className="counter">
                        <button className="btn1" type="button" onClick={(e) => onSubstract(e)}> - </button>
                        <label className="value">{value}</label>
                        <button className="btn2" type="button" onClick={(e) => onAdd(e)}> + </button>
                    </div>
                    :
                    <div role="alert">
                        <p>No stock</p>
                    </div>
                }
                
            </div>
        </>
    )

}


export default ItemCount;




