const express = require("express");
const { ObjectId } = require("mongodb");
const app = express();
const SSLCommerzPayment = require("sslcommerz-lts");
const ExamPackage =require("../model/examPackage")

const responseSSL = async (req, res) => {
  res.status(200).json({
    message: "Welcome to sslcommerz app",
    url: `${process.env.ROOT}/ssl-request`,
  });
};

const tranId = new ObjectId().toString();
const sslRequest = async (req, res) => {
  const {
    nid,
    name,
    email,
    packageUid,
    packageName,
    examCategory,
    packageFee,
  } = req.body;
  const pack = await ExamPackage.findOne({ packageUid });

  const dataa = {
    total_amount: pack?.packageFee,
    currency: "BDT",
    tran_id: tranId,
    success_url: `${process.env.ROOT}/ssl-payment-success`,
    fail_url: `${process.env.ROOT}/ssl-payment-fail`,
    cancel_url: `${process.env.ROOT}/ssl-payment-cancel`,
    shipping_method: "No",
    product_name: packageName,
    product_category: examCategory,
    product_profile: "general",
    cus_name: name,
    cus_email: email,
    cus_add1: nid,
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    multi_card_name: "mastercard",
    value_a: "ref001_A",
    value_b: "ref002_B",
    value_c: "ref003_C",
    value_d: "ref004_D",
    ipn_url: `${process.env.ROOT}/ssl-payment-notification`,
  };

  const sslcommerz = new SSLCommerzPayment(
    process.env.STORE_ID,
    process.env.STORE_PASSWORD,
    false
  );

  await sslcommerz.init(dataa).then((data) => {
    console.log(dataa);

    if (data?.GatewayPageURL) {
      res.status(200).json({ url: data?.GatewayPageURL });
      {
        /**const responseFromBackend = {
  GatewayPageURL: "your-gateway-url"
};

// Redirect the user to the GatewayPageURL
window.location.href = responseFromBackend.GatewayPageURL; */
      }
    } else {
      res.status(400).json({
        message: "Session was not successful",
      });
    }
  });
};
const sslSuccess = async (req, res) => {
  console.log(req.body);
  try {
    // Extract val_id from the request body or query parameters
    const valId = req.body.val_id || req.query.val_id;
    console.log(valId);
    // Verify the transaction using the val_id and update your records
    // (Replace this with your own verification and record update logic)

    // Respond with a success message
    return res.status(200).json({
      message: "Payment success",
      val_id: valId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

const sslNotifiaction = async (req, res) => {
  return res.status(200).json({
    data: req.body,
    message: "Payment notification",
  });
};

const sslfail = async (req, res) => {
  /**
   * If payment failed
   */

  return res.status(200).json({
    data: req.body,
    message: "Payment failed",
  });
};

const sslCancel = async (req, res) => {
  /**
   * If payment cancelled
   */

  return res.status(200).json({
    data: req.body,
    message: "Payment cancelled",
  });
};
module.exports = {
  responseSSL,
  sslRequest,
  sslSuccess,
  sslNotifiaction,
  sslfail,
  sslCancel,
};
