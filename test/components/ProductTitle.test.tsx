import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../fixtures';

describe('<ProductTitle />', () => {
  it('Should render correctly with the personalized title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTitle title="Custom Product" />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("Should render with the product's name", () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
