import { IProps as IProductButtonsProps } from '../components/ProductButtons';
import { IProps as IProductCardProps } from '../components/ProductCard';
import { IProps as IProductImageProps } from '../components/ProductImage';
import { IProps as IProductTitleProps } from '../components/ProductTitle';

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface IProductContextProps {
  counter: number;
  product: Product;
  maxCount?: number;

  increaseBy: (value: number) => void;
}

export interface IProductCardHOCProps {
  ({ children, product }: IProductCardProps): JSX.Element;
  Buttons: (Props: IProductButtonsProps) => JSX.Element;
  Image: (Props: IProductImageProps) => JSX.Element;
  Title: (Props: IProductTitleProps) => JSX.Element;
}

export interface IOnChangeArgs {
  product: Product;
  quantity: number;
}

export interface IInitialValues {
  count?: number;
  maxCount?: number;
}

export interface IProductCardHandlers {
  counter: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
