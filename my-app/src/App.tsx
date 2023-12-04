import "./App.css";
import { ProductItem } from "./components/ProductItem";

const products = [
  { id: 1, name: "Pain au chocolat", description: "Description 1" },
  { id: 2, name: "Whole bread", description: "Description 2" },
  { id: 3, name: "Croissant" },
  { id: 4, name: "Cookie", description: "🍪 Delicious cookie" },
];

function App() {
  return (
    <div>
      <h1>My Bakery</h1>
      <p>Let's shop some bread and pastries</p>
      <ul>
        {products.map((product) => {
          return (
            <ProductItem key={product.id} product={product}>
              <strong>{product.description}</strong>
            </ProductItem>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
