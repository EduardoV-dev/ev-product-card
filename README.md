# ed-product-card

Prueba de despliegue de componentes en NPM

### Eduardo Varela

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'ev-product-card';
```

```
<ProductCard
  initialValues={{ count: 4, maxCount: 10 }}
  {...{ product }}
>
  {({ reset, counter, increaseBy, isMaxCountReached }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
