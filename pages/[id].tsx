/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import ProductDetail from '@/src/components/ProductDetail'
import Header from '@/src/components/Header'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import Spinner from '@/src/components/Spinner';

function productDetail() {

    const router = useRouter();
    const {id }= router.query
    console.log(id)

    console.log()


    const getProduct = async (id:any) => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        
        console.log(id)
        return data;
      };
      const { data, isLoading, error } = useQuery(["product", id], () => getProduct(id));
    
  return (
    <div>
        <Header />

        {isLoading && (
          <div className="flex border-2 h-screen p-40 flex-wrap justify-evenly gap-10 items-center">
            <Spinner />
          </div>
        )}

      {data &&  <ProductDetail product={data} />}
    </div>
  )
}

export default productDetail