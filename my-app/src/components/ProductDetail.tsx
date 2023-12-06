import { useParams } from "react-router-dom";

export function ProductDetail() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Detail page</h1>
    </>
  );
}
