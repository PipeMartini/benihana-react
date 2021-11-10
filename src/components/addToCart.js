import React from 'react';

export default function AddToCart(props) {
  const { productCart, onAddProductCart  } = props;
  console.log(productCart);
  return (
    <>
        <div>
        <img src={productCart.image} alt={productCart.name} />
        <h3>{productCart.name}</h3>
        <div>${productCart.price}</div>
        </div>
        <button onClick={() => onAddProductCart(productCart)}>Add To Cart</button>
    </>
  );
}