const user = {
    name: 'Philipp',
    cartItems: []
};

const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const filteredCartItems = cartItems.filter(
        cartItem => cartItem.id !== cartItemToRemove.id
    )

    if (filteredCartItems) {
        return [...filteredCartItems]
    }
    return cartItems

};

const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToDecrease.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id)
    }

    return cartItems.map(
        cartItem =>
            cartItem.id === cartItemToDecrease.id ?
                { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
    );
}


// now lets try out the code  
// cartState simulates setState


const cartState1 = addItemToCart(user.cartItems,
    {
        id: 1,
        name: "Banana",
        sort: "Chiquita"
    });
cartState1; // Banana, quantity:1

const cartState2 = addItemToCart(cartState1,
    {
        id: 1,
        name: "Banana",
        sort: "Chiquita"
    });
cartState2; // Banana, quantity:2

const cartState3 = addItemToCart(cartState2,
    {
        id: 2,
        name: "Red apple",
        sort: "Red star apple"
    });
cartState3; // Banana, quantity:2 & Red apple, quantity:1


const cartState4 = decreaseItemQuantity(cartState3,
    {
        id: 1,
        name: "Banana",
        sort: "Chiquita"
    });

cartState4; //Banana, quantity:1 & Red apple, quantity:1


// addItemToCart function can also be used to increase item quantity