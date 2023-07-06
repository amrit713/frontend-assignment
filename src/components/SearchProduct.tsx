import React from 'react'
import Product from './Product';

function SearchProduct({products}:any) {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>

     {
      products.map(({price, id, title, image, description, category}:any)=>{
        const convertedPrice = price *116.44;
        return <Product key={id} title={title} price={convertedPrice} image={image} description={description} category={category} id={id}/>
      })
     }
    </div>
  )
}

export default SearchProduct