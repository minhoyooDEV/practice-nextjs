// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "~/types";

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
  res: NextApiResponse<Product | { message: string }>
) {
  const id = Number(req.query.id ?? 0);
  const product = products.find((product) => product.id === id);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.status(200).json(product);
  }
}
