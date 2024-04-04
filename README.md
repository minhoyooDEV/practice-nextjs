# practice-nextjs

## 실행사양
- node.js: v18.x
- pnpm

간단하게 Next.js를 연습해보는 프로젝트입니다.
> [readme.nextjs](./README.nextjs.md) 를 참고하여 프로젝트를 실행합니다.

대략적으로 react를 사용하는 방법을 익히고, Next.js의 기본적인 사용법을 익히는 것이 목표입니다.
순차적으로 테스크를 수행하며, 각 테스크를 완료할 때마다 commit을 남기는 것을 원칙으로 합니다.

## Task List
- [ ] Task 1: `/home`, `/product` 페이지를 생성합니다
  - [ ] Task 1+: `/product/:id` 처럼  `/product` 뒤에 여러개의 id 주소를 가질 수 있도록 하는 페이지를 생성합니다 [**참고**](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
- [ ] Task 2: `/home` 에서 `/product`로 이동할 수 있게 합니다.
  - [ ] Task 2+: [**next router**](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating)를 사용할때와 [**window api**](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)를 사용할때의 동작차이를 이해합니다
