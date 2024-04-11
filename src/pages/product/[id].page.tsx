import useFetchProduct from "~/hooks/useFetchProduct.hook";
import { useRouter } from "../../../node_modules/next/router";

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { response } = useFetchProduct(router.query.id);

  return (
    <div>
      <div>
        <h1>{response?.id} Page</h1>
        <span>
          {response?.id}, {response?.name}, {response?.price}
        </span>
      </div>
      <div>
        <a onClick={router.back}>뒤로 가기</a>
      </div>
    </div>
  );
};

export default ProductPage;
