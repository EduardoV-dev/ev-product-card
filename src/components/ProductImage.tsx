import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface IProps {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

const ProductImage = ({ className = '', img, style }: IProps) => {
  const { product } = useContext(ProductContext);

  const imgToShow: string = img ?? (product.img = '');

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Coffee Mug"
      {...{ style }}
    />
  );
};

export default ProductImage;
