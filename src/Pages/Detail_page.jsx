import React from "react";

import RelatedProduct from "../Components/product/RelatedProduct";
import Productliked from "../Components/product/Productliked";
import ProductDetail from "../Components/product/ProductDetail";

function Detailpage() {
  return (
    <div>
      <ProductDetail />
      <RelatedProduct />
      <Productliked />
    </div>
  );
}

export default Detailpage;
