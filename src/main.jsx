import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
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
import EventListings from "./Pages/EventListings.jsx";
import EventDetails from "./Pages/EventDetails.jsx";
import Checkout from "./Pages/Checkout.jsx";
import RequestCatelog from "./Pages/RequestCatelog.jsx";
import OpenAccount from "./Pages/OpenAccount.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Main from "./Pages/Main.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Main />} />
      <Route path="detailpage" element={<Detailpage />} />
      <Route path="cart" element={<Cart />} />
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
