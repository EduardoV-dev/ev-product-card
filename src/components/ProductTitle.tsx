import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface IProps {
  className?: string;
  style?: CSSProperties;
  title?: string;
}

const ProductTitle = ({ title, className = '', style }: IProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span
      className={`${styles.productDescription} ${className}`}
      {...{ style }}
    >
      {title ?? product.title}
    </span>
  );
};

export default ProductTitle;
