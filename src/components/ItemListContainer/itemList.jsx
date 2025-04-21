import React from "react";
import Item from "../Item";

const ItemList = ({ list }) => {
    return(
        <div>
            {list.map((item) => {
                return (
                    <Item key={item.id} item={item} />
                )
            })}
        </div>
    )

}

export default ItemList;