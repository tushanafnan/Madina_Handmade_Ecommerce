import { useDocumentTitle, useScrollTop } from "@/hooks";
import { addProduct } from "@/redux/actions/productActions";
import { LoadingOutlined } from "@ant-design/icons";
import React, { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const ProductForm = lazy(() => import("../components/ProductForm"));

const AddProduct = () => {
  useScrollTop();
  useDocumentTitle("Add New Product | Medina's Handmade");
  const isLoading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  const onSubmit = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div className='product-form-container'>
      <h2>Add New Product</h2>
      <Suspense
        fallback={
          <div className='loader' style={{ minHeight: "80vh" }}>
            <h6>Loading ... </h6>
            <br />
            <LoadingOutlined />
          </div>
        }
      >
        <ProductForm
          isLoading={isLoading}
          onSubmit={onSubmit}
          product={{
            name: "",
            brand: "",
            price: 0,
            maxQuantity: 0,
            description: "",
            keywords: [],
            sizes: [],
            image: "",
            isFeatured: false,
            isRecommended: false,
            availableColors: [],
            imageCollection: [],
          }}
        />
      </Suspense>
    </div>
  );
};

export default withRouter(AddProduct);
