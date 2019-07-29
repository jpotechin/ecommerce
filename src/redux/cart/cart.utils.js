export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    //   map lets us rerender components because it creates a new array
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //   if cartItemToAdd is now found in the carts array added it to the cart array
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
