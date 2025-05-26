import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <h4>Precio: ${item.price}</h4>
            <Link to={"/item/" + item.id}> Ver detalle</Link>
        </div>
    )
}

export default Item;