import ProductList from "~/components/ProductList.component";
import useFetchProductList from "~/hooks/useFetchProductList.hook";

const SimpleProductPage = () => {
  const { response } = useFetchProductList();

  return (
    <div>
      <h1>Simple Product Page</h1>
      <ProductList products={response}></ProductList>
    </div>
  );
};
export default SimpleProductPage;
