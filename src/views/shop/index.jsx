/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from "@/components/product";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import { selectFilter } from "@/selectors/selector";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const Shop = () => {
  useDocumentTitle("Shop | Medina's Handmade");
  useScrollTop();

  const store = useSelector(
    (state) => ({
      filteredProducts: selectFilter(state.products.items, state.filter),
      products: state.products,
      requestStatus: state.app.requestStatus,
      isLoading: state.app.loading,
    }),
    shallowEqual
  );

  return (
    <main className='content'>
      <section className='product-list-wrapper'>
        <br /> <br />
        <AppliedFilters filteredProductsCount={store.filteredProducts.length} />
        <ProductList {...store}>
          <ProductGrid products={store.filteredProducts} />
        </ProductList>
      </section>
    </main>
  );
};

export default Shop;
