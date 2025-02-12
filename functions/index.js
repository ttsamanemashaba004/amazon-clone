/* eslint-disable */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51QJyiQGmnwFVF56FSEVQuAxrUH2mEWw5L7XukyxkxDOPkGk18YKWYF3cXTk3f6r7TL9rpyhA2KzoxHJGleW1YtPG00mkfPcaVg"
); // Secret-key

// -API

// -APP Config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // If okay created
  res.status(201).send({clientSecret: paymentIntent.client_secret})
});

// - Listen commands

exports.api = functions.https.onRequest(app);
