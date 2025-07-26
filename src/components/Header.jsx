import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";  

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);
console.log(loggedInUser);

// Subscribing to the store using Selector
const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <div className="flex justify-between bg-orange-600 shadow-2xl">
      <div className="logo-container">
        <img className="w-35" src={LOGO_URL}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
          <li className="px-4"><Link to="./">Home</Link></li>
          <li className="px-4"><Link to="./About">About Us</Link></li>
          <li className="px-4"><Link to="./Contact">Contact US</Link></li>
          <li className="px-4"><Link to="./Grocery">Grocery</Link></li>
          <li className="px-4 font-bold text-xl"> <Link to= "./Cart"> Cart - ({cartItems.length} items) </Link></li>
          <button 
          className="login" 
          onClick={ () => {
          btnNameReact === "Login" 
          ? setbtnNameReact("Logout") 
          : setbtnNameReact("Login");
            }}>
            {btnNameReact}
            </button>

            <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;