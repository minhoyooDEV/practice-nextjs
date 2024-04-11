import { useRouter } from "../../node_modules/next/router";

const HomePage: React.FC = () => {
  const router = useRouter()

  return (
    <div>
      {/* 
        reactRouter.push 를 사용하는경우, react application 내 이동 방식이라 상태값을 유지 할 수 있다.
        window.location 을 통한 라우팅은 HTML 을 새로 불러오는 방식으로 상태값을 유지 할 수 없다.
      */}
      <h1 onClick={() => {router.push('/product/1')}}>PRODUCT 1 PAGE GO!~GO!</h1>
    </div>
  );
}

export default HomePage;