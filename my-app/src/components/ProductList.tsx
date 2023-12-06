import React from "react";
import { ProductItem } from "./ProductItem";
import { useProductListQuery } from "../queries";

export function ProductList() {
  return (
    <div>
      <h1>My Bakery</h1>
      <p>Let's shop some bread and pastries</p>

      <ProductListResults />
    </div>
  );
}

function ProductListResults() {
  const [page, setPage] = React.useState(1);
  const productsQuery = useProductListQuery({ page });

  if (productsQuery.isLoading) {
    return <p>Loading</p>;
  }

  const { data: products } = productsQuery;
  if (productsQuery.isError || !products) {
    return (
      <p>
        Error{" "}
        <button onClick={() => productsQuery.refetch()}>Try refreshing?</button>
      </p>
    );
  }

  return (
    <>
      <button
        onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
      >
        Previous
      </button>
      Page {page}
      <button onClick={() => setPage((currentPage) => currentPage + 1)}>
        Next
      </button>
      {productsQuery.isFetching && "Fetching new data"}
      <ul>
        {products.map((product) => {
          return (
            <ProductItem key={product.id} product={product}>
              <strong>{product.description}</strong>
            </ProductItem>
          );
        })}
      </ul>
    </>
  );
}
