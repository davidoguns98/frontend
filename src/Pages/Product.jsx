import React, { useContext } from "react";
import "./CSS/Products.css";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breamcrums from "../Components/Breadcrumps/Breamcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProducts/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="products">
      <Breamcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
