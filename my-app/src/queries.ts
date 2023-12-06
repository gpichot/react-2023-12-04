import { useQuery } from "@tanstack/react-query";
import { Product } from "./types";

async function fetchProducts({ page }) {
  const response = await fetch(
    `https://bakery-api.fly.dev/products?page=${page}`
  );
  const products = (await response.json()) as Product[];
  return products;
}

export function useProductListQuery({ page }) {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts({ page }),
  });
}
