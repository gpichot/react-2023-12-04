import "./App.css";
import { ProductForm } from "./components/ProductForm";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { ProductDetail } from "./components/ProductDetail";
import { ProductList } from "./components/ProductList";

function Root() {
  return (
    <>
      <Link to="/">Homepage</Link>
      <Link to="/form">Add a product</Link>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Page not found</p>,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/form",
        element: <ProductForm />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
