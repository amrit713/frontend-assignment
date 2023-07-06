/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import Product from './Product'

interface ProductFeedProps {
  products:any
}

const ProductFeed: FC<ProductFeedProps> = ({products}) => {

    console.log()
 
  return ( <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            
               
              
  {
      products.slice(0,4).map(({id, title,image,price, description, category }:any)=>{
       
          const convertedPrice = price *116.44;
         return <Product key={id} title={title} price={convertedPrice} image={image} description={description} category={category} id={id}/>
      })
  }

  <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />

  <div className="md:col-span-2">
  {
      products.slice(4,5).map(({id, title,image,price, description, category }:any)=>{
          const convertedPrice = price *116.44;
         return <Product key={id} title={title} price={convertedPrice} image={image} description={description} category={category} id={id}/>
      })
  }
  </div>

  {
      
      products.slice(5,products.length).map(({id, title,image,price, description, category }:any)=>{
          const convertedPrice = price *116.44;
          
         return <Product key={id} title={title} price={convertedPrice} image={image} description={description} category={category} id={id}/>
      })
  }
  
</div>)
}

export default ProductFeed