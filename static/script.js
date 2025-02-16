// Basic cart storage (you would typically use a database or session storage here)
let cart = [];

// Function to add product to cart
function addToCart(productName, productPrice, productId) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find(product => product.id === productId);

    if (existingProduct) {
        // If the product already exists, increase quantity
        existingProduct.quantity++;
        alert(productName + " quantity updated to " + existingProduct.quantity);
    } else {
        // Otherwise, add a new product to the cart
        const newProduct = {
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        };
        cart.push(newProduct);
        alert(productName + " has been added to your cart for " + productPrice);
    }

    console.log(cart); // Optional: To see the cart contents in the console
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    // Find the index of the product to be removed
    const productIndex = cart.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        // Remove product from the cart array
        const removedProduct = cart.splice(productIndex, 1);
        alert(removedProduct[0].name + " has been removed from your cart.");
    } else {
        alert("Product not found in the cart.");
    }

    console.log(cart); // Optional: To see the updated cart in the console
}

// Function to update the quantity of a product in the cart
function changeQuantity(productId, quantity) {
    if (quantity <= 0) {
        alert("Quantity must be greater than 0.");
        return;
    }

    const product = cart.find(product => product.id === productId);

    if (product) {
        product.quantity = quantity;
        alert("Changed quantity of " + product.name + " to " + quantity);
    } else {
        alert("Product not found in the cart.");
    }

    console.log(cart); // Optional: To see the updated cart in the console
}

// Function to view cart contents (for demonstration)
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        let cartContents = "Your Cart:\n";
        cart.forEach(product => {
            cartContents += `${product.name} - $${product.price} x ${product.quantity}\n`;
        });
        alert(cartContents);
    }
}

// Example of calling the functions
// You can call these functions when interacting with your HTML elements
// For example, to add a product with id 1, name 'White T-Shirt' and price '$52':
// addToCart('White Printed T-Shirt', '$52.00', 1);
