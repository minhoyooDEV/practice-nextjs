import { Product } from "~/types/product"
import ProductItem from "./ProductItem.component";

// ProductListProps 타입 정의
type ProductListProps = {
  products: Product[]; // products 배열을 props로 받음
};

const ProductList: React.FC<ProductListProps> = ({products}) => {
	console.log(products)
	return <div>
		<ul>
			{products && products.map((product) => (
				<ProductItem key={product.id} item={product}></ProductItem>
			))}
		</ul>
	</div> 
}

export default ProductList