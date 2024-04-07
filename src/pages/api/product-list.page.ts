// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Apple", price: 1000 },
  { id: 2, name: "Banana", price: 2000 },
  { id: 3, name: "Orange", price: 6000 },
  { id: 4, name: "Pineapple", price: 4000 },
  { id: 5, name: "Mango", price: 5000 },
  { id: 6, name: "Grapes", price: 6000 },
  { id: 7, name: "Watermelon", price: 7000 },
  { id: 8, name: "Strawberry", price: 4000 },
  { id: 9, name: "Cherry", price: 4000 },
  { id: 10, name: "Blueberry", price: 10000 },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(products);
}
