import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product1 } from '../fixtures';

describe('<ProductImage />', () => {
  it('Should render the component with the personalized image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductImage img="https://via.placeholder.com/150" />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Should render the component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
