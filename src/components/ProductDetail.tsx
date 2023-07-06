/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { StarIcon } from "@heroicons/react/24/solid";





const MAX_RATING = 5;
const MIN_RATING = 1;

interface ProductDetailProps {
    product:any
}

const ProductDetail: FC<ProductDetailProps> = ({product}) => {
    const dispatch = useDispatch();

const {title, image, price, category, description, id} = product
     const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

    const addItemToBasket = () => {
        const product = {
          id,
          title,
          image,
          price,
          category,
          description,
          rating,
         
        };
        dispatch(addToBasket(product));
      };
  return (
<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container  px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
      <img alt="ecommerce" className="lg:w-1/2 h-[70vh] lg:h-auto  w-full object-cover object-center rounded border border-gray-200" src={product.image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} </h1>
        <div className="flex items-center  ">
          <p className="text-lg font-semibold mr-4">Ratting:</p>
          {/* ratting */}
          {Array(rating)
          .fill()
          .map((_, i) => {
            return <StarIcon key={i} className="h-5 text-yellow-500" />;
          })}
          
        </div>
        <p className="leading-relaxed">{product.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"/>
          
         
       
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
          {`Rs. ${new Intl.NumberFormat("en-NP").format(product.price)}`}
          </span>
          <button className=" button flex ml-auto   border-0 py-2 px-6 focus:outline-none  rounded" onClick={addItemToBasket}>Add To Cart</button>
       
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default ProductDetail;
