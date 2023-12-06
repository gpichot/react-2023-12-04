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
    staleTime: 20 * 1000,
    gcTime: 5 * 1000,
  });
}
