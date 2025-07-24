import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Grocery from "./components/Grocery.jsx";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.jsx";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// on demand loading 

const Grocery = lazy(() => import("./components/Grocery.jsx"))
const About = lazy(() => import("./components/About.jsx"))

const AppLayout = () => {

  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // Make an api call and send username and password
     const data = {
      name: "Shaurya Pratap Singh",
     };
     setUserName(data.name);
  }, [])


  return (
    <Provider store = {appStore}>
      <UserContext.Provider value = {{loggedInUser: userName, setUserName}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
       {
        path: "/",
        element: <Body />,
      },
       {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
