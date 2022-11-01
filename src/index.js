import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./ShoesStore/ProductList";
import ShoesStore from "./ShoesStore/ShoesStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ShoesStore>
      <ProductList />
    </ShoesStore>
  </div>
);
