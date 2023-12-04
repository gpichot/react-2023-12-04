type ProductItemProps = {
  product: {
    name: string;
    description?: string;
  };
};

export function ProductItem(props: ProductItemProps) {
  const { product } = props;
  const { name, description } = product;
  return (
    <li style={{ backgroundColor: "purple" }}>
      {name}
      {description ? (
        <>
          <br />
          <span style={{ fontStyle: "italic" }}>{description}</span>
        </>
      ) : null}
    </li>
  );
}
