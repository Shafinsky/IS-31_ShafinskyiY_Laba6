/**
 * @param {Object} obj 
 * @param {Function} callback
 */
function createProduct(obj, callback) {
    const productWithId = { ...obj, id: Date.now() };
    
    callback(productWithId);
}

/**
 * @param {Object} product
 */
function logProduct(product) {
    console.log("Created Product:", product);
}

/**
 * @param {Object} product
 */
function logTotalPrice(product) {
    if (product.price && product.quantity) {
        const totalPrice = product.price * product.quantity;
        console.log(`Total Price for ${product.name}: ${totalPrice}`);
    } else {
        console.error("Missing price or quantity for product:", product);
    }
}

const sampleProduct = { name: "Phone", price: 500, quantity: 3 };

createProduct(sampleProduct, logProduct);
createProduct(sampleProduct, logTotalPrice);