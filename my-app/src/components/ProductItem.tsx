import React from "react";

type ProductItemProps = {
  product: {
    name: string;
    description?: string;
  };
  children: React.ReactNode;
};

export function ProductItem(props: ProductItemProps) {
  const { product, children } = props;
  const { name } = product;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    console.log(`enter ${product.name}`, e);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    console.log(`leave ${product.name}`, e);
  };
  return (
    <li
      style={{ backgroundColor: "purple" }}
      onClick={() => console.log(product)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name}
      {children}
    </li>
  );
}
