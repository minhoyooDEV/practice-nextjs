import { useEffect, useState } from "react";
import { Product } from "~/types/product";

const useFetchProductList = () => {
  const [response, setResponse] = useState<Product[]>([]);

  useEffect(() => {
    try {
      fetch("/api/product-list").then((response) => {
        response.json().then((data: Product[]) => {
          setResponse(data);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    response,
  };
};

export default useFetchProductList;
