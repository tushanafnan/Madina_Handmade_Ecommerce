import { CHECKOUT_STEP_1 } from "@/constants/routes";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import { Form, Formik } from "formik";
import PropType from "prop-types";
import React from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { StepTracker } from "../components";
import withCheckout from "../hoc/withCheckout";
import CreditPayment from "./CreditPayment";
import Total from "./Total";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name should be at least 4 characters.")
    .required("Name is required"),
  cardnumber: Yup.string()
    .min(13, "Card number should be 13-19 digits long")
    .max(19, "Card number should only be 13-19 digits long")
    .required("Card number is required."),
  expiry: Yup.date().required("Credit card expiry is required."),
  ccv: Yup.string()
    .min(3, "CCV length should be 3-4 digit")
    .max(4, "CCV length should only be 3-4 digit")
    .required("CCV is required."),
  type: Yup.string().required("Please select payment mode"),
});

const Payment = ({ shipping, payment, subtotal }) => {
  useDocumentTitle("Check Out Final Step | Medina's Handmade");
  useScrollTop();

  const initFormikValues = {
    name: payment.name || "",
    cardnumber: payment.cardnumber || "",
    expiry: payment.expiry || "",
    ccv: payment.ccv || "",
    type: payment.type || "",
  };

  const onConfirm = () => {
    Swal.fire({
      icon: "success",
      title: "Order Confirmed Successfully",
      html: "<p>Your order has been placed and is on its way!</p>",
      background: "#f7f7f7",
      color: "#333",
      showConfirmButton: false,
      timer: 2000, // 2 seconds
      timerProgressBar: true,
      width: "400px", // Set width for a medium-sized box
      position: "center",
      showClass: {
        popup: "animate__animated animate__zoomIn",
      },
      hideClass: {
        popup: "animate__animated animate__zoomOut",
      },
    }).then(() => {
      window.location.href = "/"; // Redirect to home page after 2 seconds
    });
  };

  if (!shipping || !shipping.isDone) {
    return <Redirect to={CHECKOUT_STEP_1} />;
  }
  return (
    <div className='checkout'>
      <StepTracker current={3} />
      <Formik
        initialValues={initFormikValues}
        validateOnChange
        validationSchema={FormSchema}
        onSubmit={onConfirm}
      >
        {() => (
          <Form className='checkout-step-3'>
            <CreditPayment />

            <Total
              isInternational={shipping.isInternational}
              subtotal={subtotal}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

Payment.propTypes = {
  shipping: PropType.shape({
    isDone: PropType.bool,
    isInternational: PropType.bool,
  }).isRequired,
  payment: PropType.shape({
    name: PropType.string,
    cardnumber: PropType.string,
    expiry: PropType.string,
    ccv: PropType.string,
    type: PropType.string,
  }).isRequired,
  subtotal: PropType.number.isRequired,
};

export default withCheckout(Payment);
