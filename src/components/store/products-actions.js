import { productSliceActions } from "./products-slice";

const fetchProduct = () => {
  return (dispatch) => {
    const products = JSON.parse(localStorage.getItem("products"));
    // dispatch action to add product
    dispatch(productSliceActions.addProduct(products));
    return products;
  };
};

export default fetchProduct;

export const updateProduct = (newProduct, id) => {
  return (dispatch) => {
    const products = JSON.parse(localStorage.getItem("products"));
    const existingProductIndex = products.findIndex(
      (product) => product.id.toString() === id.toString()
    );

    products[existingProductIndex] = newProduct;
    localStorage.setItem("products", JSON.stringify(products));
    // dispatch action to update product
    dispatch(productSliceActions.updateProduct(products));
    return products;
  };
};

export const removeProduct = (id) => {
  return (dispatch) => {
    const products = JSON.parse(localStorage.getItem("products"));
    const filteredProducts = products.filter(
      (product) => product.id.toString() !== id.toString()
    );
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    // dispatch action to upadate product
    dispatch(productSliceActions.updateProduct(filteredProducts));
    return filteredProducts;
  };
};
