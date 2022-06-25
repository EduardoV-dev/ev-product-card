import { useEffect, useRef, useState } from 'react';
import {
  IInitialValues,
  IOnChangeArgs,
  Product,
} from '../interfaces/interfaces';

interface IReturn {
  counter: number;
  increaseBy: (value: number) => void;
  isMaxCountReached: boolean;
  reset: () => void;
}

interface IArgs {
  product: Product;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: IArgs): IReturn => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isControlled = useRef<boolean>(!!onChange);
  const isMounted = useRef<boolean>(false);

  const increaseBy = (value: number) => {
    if (isControlled.current) return onChange!({ quantity: value, product });

    const newValue = Math.min(
      Math.max(counter + value, 0),
      initialValues?.maxCount || Infinity
    );

    setCounter(newValue);
    onChange?.({ product, quantity: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, [value]);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,

    increaseBy,
    reset,
  };
};

export default useProduct;
