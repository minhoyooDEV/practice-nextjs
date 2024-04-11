import { useRouter } from "../../../node_modules/next/router";

const ProductPage: React.FC = () => {
  const router = useRouter()
  return (
    <div>
      <h1>{ router.query.id } Page</h1>
    </div>
  );
}

export default ProductPage;