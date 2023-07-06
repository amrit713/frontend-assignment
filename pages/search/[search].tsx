/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/src/components/Header";
import SearchProduct from "@/src/components/SearchProduct";
import Spinner from "@/src/components/Spinner";

function search() {
  const router = useRouter();

  const name = router.query.search;

  const getProduct = async (name: any) => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${name}`
    );

    console.log(data);
    return data;
  };
  const { data, isLoading, error } = useQuery(["product", name], () =>
    getProduct(name)
  );

  console.log(data);
  return (
    <div>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {isLoading && (
          <div className="flex border-2 h-screen p-40 flex-wrap justify-evenly gap-10 items-center">
            <Spinner />
          </div>
        )}
        {data && <SearchProduct products={data} />}
        {data?.length === 0 && (
          <div className="relative w-full h-[70vh]">
            <h1 className="text-[48px] font-bold text-center mt-10">
              Category not found{" "}
            </h1>
          </div>
        )}
      </main>
    </div>
  );
}

export default search;
