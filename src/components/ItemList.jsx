import React from "react";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

const handleAddItem = (item) => {
  // Dispatch an action to add the item to the cart
  dispatch(addItem(item.card.info.name));
  
};

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border border-gray-200 border-b-2 text-left flex"
        >
          
          <div className="w-9/12">
            <div className="py-2d">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-600">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
          <div className="absolute">
               <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                onClick= {() => handleAddItem(item)}
                 Add +
                </button>
          </div>
               <img
               src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
