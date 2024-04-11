import { useEffect, useState } from "react";
import { Product } from "~/types/product";

const useFetchProduct = (id:any) => {
	const [response, setResponse] = useState<Product>();

  useEffect(() => {
    try{
      fetch(`/api/product?id=${id}`).then((response) => {
        response.json().then((data:Product) => {
          setResponse(data)});
      });
    } catch (e) {
        console.log(e);
    } 
  }, [id]);

	return {
		response,
	}
}

export default useFetchProduct;