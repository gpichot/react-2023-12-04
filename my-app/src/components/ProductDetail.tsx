import { useParams } from "react-router-dom";
import { useProductDetailQuery } from "../queries";

export function ProductDetail() {
  const params = useParams();
  const id = params.id as string;

  const detailQuery = useProductDetailQuery(id);

  if (detailQuery.isLoading) {
    return <p>Loading...</p>;
  }

  const { data: product } = detailQuery;

  if (detailQuery.isError || !product) {
    return <p>Error 😭</p>;
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}€</p>
    </>
  );
}
