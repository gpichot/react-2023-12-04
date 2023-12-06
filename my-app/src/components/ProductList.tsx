import React from "react";
import { ProductItem } from "./ProductItem";
import { useProductListQuery } from "../queries";

export function ProductList() {
  const [searchText, setSearchText] = React.useState("");

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.currentTarget.value);
  };

  React.useEffect(() => {
    document.title = `Searching for ${searchText}`;
  }, [searchText]);

  return (
    <div>
      <h1>My Bakery</h1>
      <p>Let's shop some bread and pastries</p>
      <input type="text" value={searchText} onChange={handleSearchTextChange} />
      <ProductListResults searchText={searchText} />
    </div>
  );
}

interface ProductListResultsProps {
  searchText: string;
}

function ProductListResults({ searchText }: ProductListResultsProps) {
  const productsQuery = useProductListQuery();

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

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <ul>
      {filteredProducts.map((product) => {
        return (
          <ProductItem key={product.id} product={product}>
            <strong>{product.description}</strong>
          </ProductItem>
        );
      })}
    </ul>
  );
}
