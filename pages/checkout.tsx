/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Header from '@/src/components/Header'
import Image from "next/image"
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '@/src/slices/basketSlice'
import CheckoutProduct from '@/src/components/CheckoutProduct'

function checkout() {

    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    
  return (
    <div className="bg-gray-100">
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto">

                {/* left hand  */}
                <div className="flex-grow m-5 shadow-sm">
                <Image 
                src="https://links.papareact.com/ikj" 
                width={1020}
                height={250}
                objectFit="contain"
                alt=''
                />

                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-3xl border-b-2 border-gray-100 pb-4"> 
                    {items.length ===0 ?`Your Basket Is Empty.`:` Shopping Basket.`}
                     </h1>

                    {
                        items.map((item:any,i:any) =>{
                          return  ( <CheckoutProduct
                           key={i}
                           id={item.id}
                           title={item.title}
                           rating={item.rating}
                           description = {item.description}
                           category= {item.category}
                           hasPrime ={item.hasPrime}
                           image={item.image}
                           price={item.price}
                           />)
                        })
                    }

                </div>
                </div>

                {/* Right */}
                <div className="flex flex-col bg-white p-10 shadow-md">
                {
                    items.length > 0 &&(
                        <div>
                            <h2 className="whitespace-nowrap">
                                subtotal:({items.length} items):
                                <span className="font-bold">
                                {`Rs. ${new Intl.NumberFormat("en-NP").format(total)}`}
                                </span>
                            </h2>

                           <button className='button mt-2 w-full'>Proceed to Checkout</button>
                        </div>
                    ) 
                }
                </div>
                
            </main>
        </div>
  )
}

export default checkout