/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from "next/image"
import { StarIcon } from '@heroicons/react/24/solid'

import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({
    id,
    title,
     image,
     price,
     category,
     description,
     rating,
     hasPrime}:any) {

        const product ={
            id,
        title,
        image,
        price,
        category,
        description,
        rating,
        hasPrime
        }

        const dispatch = useDispatch()

        const addItemToBasket =() =>{
            dispatch(addToBasket(product))
        }

        const removeItemFromBasket=() =>{
            dispatch(removeFromBasket({id}))
        }

       
    return (
        <div className="grid grid-cols-5">
           <Image  src={image}
            width={200}
            height={200}
            objectFit="contain" alt={''}/>

           <div className ="col-span-3 mx-5">
               <p>{title}</p>
               <div className="flex">
                   {Array(rating).fill().map((_, i)=>(
                       <StarIcon key={i} className="text-yellow-500 h-5" />
                   ))}
               </div>
               <p className="text-xs my-2 line-clamp-3 text-gray-600">{description}</p>

              <p>{`Rs. ${new Intl.NumberFormat("en-NP").format(price)}`}</p> 
            {hasPrime &&(
                <div className="flex items-center space-x-2">
                    <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
                       <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

           </div>
            {/* right add and remove */}
           <div className=" flex flex-col space-y-2 my-auto  justify-self-end">

               <button className="button" onClick={addItemToBasket}>Add to Basket</button>

               <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
           </div>
            
        </div>
    )
}

export default CheckoutProduct
