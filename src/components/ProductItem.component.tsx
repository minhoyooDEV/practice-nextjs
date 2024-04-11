import { Product } from "~/types/product";
import { useRouter } from "../../node_modules/next/router";

// ProductItemProps 타입 정의
type ProductItemProps = {
  item: Product; // products 배열을 props로 받음
};

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const router = useRouter();
  return (
    <li>
      <b>
        [ <a onClick={() => router.push(`/product/${item.id}`)}>{item.id}</a> ]
      </b>
      <span>
        name: {item.name}, price: {item.price}
      </span>
    </li>
  );
};

export default ProductItem;
