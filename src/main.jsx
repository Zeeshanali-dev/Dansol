import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MobileNav from "./Components/MobileNav.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Detailpage from "./Pages/Detail_page.jsx";
import Cart from "./Pages/Cart.jsx";
import Shoppage from "./Pages/Shoppage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/Store.jsx";
import EventListings from "./Components/Events/EventListings.jsx";
import EventDetails from "./Components/Events/EventDetails.jsx";
import Checkout from "./Components/Checkout.jsx";
import RequestCatelog from "./Components/RequestCatelog.jsx";
import OpenAccount from "./Components/OpenAccount.jsx";
import Blogs from "./Components/blogs/Blogs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Detailpage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="mobilenav" element={<MobileNav />} />
      <Route path="shoppage" element={<Shoppage />} />
      <Route path="eventlisting" element={<EventListings />} />
      <Route path="eventdetail" element={<EventDetails />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="requestcatelog" element={<RequestCatelog />} />
      <Route path="openaccount" element={<OpenAccount />} />
      <Route path="blogs" element={<Blogs />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
