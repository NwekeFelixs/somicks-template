import React, { useContext } from 'react';
import { BsEye, BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from "../contexts/CartContext";

const Product = ({product}) => {
  const {addToCart} = useContext(CartContext)
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className='border border-gray-300 h-[300px] mb-4 relative overflow-hidden group transition dark:border-gray-700'>
        <div className='w-full h-full flex items-center justify-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt={title} />
          </div>
          {/* buttons */}
          <div className='absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button onClick={() => addToCart(product, id)}>
              <div className='flex items-center justify-center text-white w-12 h-12 bg-blue-900'>
                <BsPlus className='text-3xl' />
              </div>
            </button>
            <Link to={`/products/${id}`} className='w-12  h-12 bg-white dark:bg-gray-800 flex justify-center items-center text-gray-800 drop-shadow-xl'>
              <BsEye className='text-3xl dark:text-white' />
            </Link>
          </div>
        </div>
      </div>
      {/* category & title */}
      <div>
        <div className='text-sm capitalize text-gray-500 dark:text-gray-400'>{category}</div>
        <Link to={`/products/${id}`}>
          <h2 className='font-semibold mb-1 dark:text-white'>{title}</h2>
        </Link>
        <div className='font-semibold dark:text-gray-300'>$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
