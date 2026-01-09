import React from "react";
import useGet from "../hooks/useGet";

import Card from "../components/Card";

const HomePage = () => {
  const { data, loading } = useGet({ url: "products" });
  const products = data?.data?.products;
  const initialProducts = products?.slice(products?.length - 30 , products?.length - 22)
     console.log(initialProducts);
     
  return (
    <section>
    
      <div className="container mx-auto px-5">
        <div className="grid  xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {initialProducts?.map((el) => (
            <Card el={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
