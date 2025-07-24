import { useEffect, useState } from "react";
import { MENU_API, MENU_API2 } from '../utils/constant';

const useRestaurantMenu = (resId) => {
 
const [resInfo, setResInfo] = useState(null);
     
     useEffect(() => {
          fetchData();
     }, []);

     const fetchData = async () => {
          const data = await fetch(MENU_API + resId + MENU_API2);
          const json = await data.json();
          setResInfo(json.data);
     }

     return resInfo;
}

export default useRestaurantMenu;