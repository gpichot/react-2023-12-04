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
  const [isHovered, setIsHovered] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = () => {
    setIsHovered(false);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };
  return (
    <li
      style={{ backgroundColor: isHovered ? "#88888811" : "#11111122" }}
      onClick={() => console.log(product)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name}
      {children}
      <div>
        <button onClick={handleIncrement}>+</button>
        {quantity}
        <button onClick={handleDecrement}>-</button>
      </div>
    </li>
  );
}
