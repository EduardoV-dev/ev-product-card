import { IProductCardHOCProps } from '../interfaces/interfaces';
import ProductButtons from './ProductButtons';
import ProductCardHOC from './ProductCard';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';

export { default as ProductTitle } from './ProductTitle';
export { default as ProductImage } from './ProductImage';
export { default as ProductButtons } from './ProductButtons';

export const ProductCard: IProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
