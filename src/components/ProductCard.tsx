import React, { createContext, CSSProperties } from 'react';
import {
  IInitialValues,
  IOnChangeArgs,
  IProductCardHandlers,
  IProductContextProps,
  Product,
} from '../interfaces/interfaces';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface IProps {
  // children?: ReactElement | ReactElement[];
  children: (args: IProductCardHandlers) => JSX.Element;
  className?: string;
  initialValues?: IInitialValues;
  onChange?: (args: IOnChangeArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
}

const ProductCard = ({
  children,
  className,
  initialValues,
  onChange,
  product,
  style,
  value,
}: IProps): JSX.Element => {
  const { counter, increaseBy, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div
        className={`${styles.productCard} ${className ?? ''}`}
        {...{ style }}
      >
        {children({
          counter,
          isMaxCountReached,

          maxCount: initialValues?.maxCount || Infinity,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

export default ProductCard;
