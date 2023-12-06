import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Product } from "./types";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

async function fetchProducts({ page }: { page: number }) {
  const response = await fetch(
    `https://bakery-api.fly.dev/products?page=${page}`
  );
  await sleep();
  const products = await response.json();
  return products as Product[];
}

export function useProductListQuery({ page }: { page: number }) {
  return useQuery({
    queryKey: ["products", { page }],
    queryFn: () => fetchProducts({ page }),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}
async function fetchProductDetails(id: string) {
  const response = await fetch(`https://bakery-api.fly.dev/products/${id}`);
  await sleep();
  const product = await response.json();
  return product as Product;
}

export function useProductDetailQuery(id: string) {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProductDetails(id),
  });
}
