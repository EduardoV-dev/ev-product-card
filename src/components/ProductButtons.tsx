import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface IProps {
  className?: string;
  style?: CSSProperties;
}

const ProductButtons = ({ className = '', style }: IProps) => {
  const { counter, increaseBy, maxCount = Infinity } = useContext(
    ProductContext
  );

  const isMaxReached: () => boolean = useCallback(() => counter >= maxCount, [
    counter,
    maxCount,
  ]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} {...{ style }}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        {' '}
        -{' '}
      </button>
      <div className={styles.countLabel}> {counter} </div>

      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : ''
        }`}
        disabled={isMaxReached()}
        onClick={() => increaseBy(1)}
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
};

export default ProductButtons;
