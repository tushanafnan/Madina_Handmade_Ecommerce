/* eslint-disable react/no-multi-comp */
import { useDocumentTitle, useScrollTop } from "@/hooks";
import { LoadingOutlined } from "@ant-design/icons";
import React, { Suspense, lazy } from "react";
import UserTab from "../components/UserTab";

const UserAccountTab = lazy(() => import("../components/UserAccountTab"));
const UserWishListTab = lazy(() => import("../components/UserWishListTab"));
const UserOrdersTab = lazy(() => import("../components/UserOrdersTab"));

const Loader = () => (
  <div className='loader' style={{ minHeight: "80vh" }}>
    <LoadingOutlined />
    <h6>Loading ... </h6>
  </div>
);

const UserAccount = () => {
  useScrollTop();
  useDocumentTitle("My Account | Medina's Handmade");

  return (
    <UserTab>
      <div index={0} label='Account'>
        <Suspense fallback={<Loader />}>
          <UserAccountTab />
        </Suspense>
      </div>
      <div index={1} label='My Wish List'>
        <Suspense fallback={<Loader />}>
          <UserWishListTab />
        </Suspense>
      </div>
      <div index={2} label='My Orders'>
        <Suspense fallback={<Loader />}>
          <UserOrdersTab />
        </Suspense>
      </div>
    </UserTab>
  );
};

export default UserAccount;
