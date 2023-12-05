import React from "react";
import styles from "./ProductItem.module.css";

type ProductItemProps = {
  product: {
    name: string;
    description?: string;
  };
  children: React.ReactNode;
};

function useQuantity() {
  const [quantity, setQuantity] = React.useState(0);

  return {
    quantity,
    increment: () => setQuantity((q) => q + 1),
    decrement: () => setQuantity((q) => q - 1),
  };
}

export function ProductItem(props: ProductItemProps) {
  const { product, children } = props;
  const { name } = product;
  const [isHovered, setIsHovered] = React.useState(false);
  const { quantity, increment, decrement } = useQuantity();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = () => {
    setIsHovered(false);
  };

  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };
  return (
    <li
      className={styles.productItem}
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
