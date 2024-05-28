import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center text-white">
        LOADING....
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <div className="pt-32 pb-12 lg:py-32 lg:h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>

          <div className="flex-1 lg:text-left text-center">
            <h1 className="dark:text-white text-[26px] font-bold mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <p className="text-blue-900 text-xl font-medium mb-6">$ {price}</p>

            <p className="mb-8 dark:text-gray-400">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-blue-900 py-4 px-8 rounded text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
