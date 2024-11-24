const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];
  
  /**
   * @param {Array} products 
   * @returns {Array}
   */
  const processFruits = (products) => {
    return products.map((product, index) => ({
      ...product, 
      price: product.price * 0.8, 
      id: index + 1,
    }));
  };
  
  document.getElementById("processFruitsButton").addEventListener("click", () => {
    const discountedFruits = processFruits(fruits);
  

    document.getElementById("output").textContent = JSON.stringify(discountedFruits, null, 2);
  });