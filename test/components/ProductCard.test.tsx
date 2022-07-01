import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../fixtures';

describe('<ProductCard />', () => {
  it('Should render correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTitle title="Custom Product" />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Should increment the count', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ counter, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{counter}</span>
            <button onClick={() => increaseBy(1)}>Increase</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
