export const getFilteredProducts = (products) => {
    return products.filter(item =>
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  };
  