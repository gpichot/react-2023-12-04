import React from "react";
import "./App.css";
import { ProductItem } from "./components/ProductItem";
import { ProductForm } from "./components/ProductForm";

const products = [
  { id: 1, name: "Pain au chocolat", description: "Description 1" },
  { id: 2, name: "Whole bread", description: "Description 2" },
  { id: 3, name: "Croissant" },
  { id: 4, name: "Cookie", description: "🍪 Delicious cookie" },
];

function App() {
  const [searchText, setSearchText] = React.useState("");

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.currentTarget.value);
  };
  return (
    <div>
      <h1>My Bakery</h1>
      <p>Let's shop some bread and pastries</p>
      <input type="text" value={searchText} onChange={handleSearchTextChange} />

      <ul>
        {filteredProducts.map((product) => {
          return (
            <ProductItem key={product.id} product={product}>
              <strong>{product.description}</strong>
            </ProductItem>
          );
        })}
      </ul>
      <ProductForm />
    </div>
  );
}

export default App;
