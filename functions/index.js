
'use strict';

const functions = require("firebase-functions");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
//var paystack = require("paystack")("secret_key");\

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({ origin: true }));

// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = 'adexdsamson@gmail.com';
const gmailPassword = 'adeola1254';
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});


const APP_NAME = 'Global Forex Investment';


app.post('/sendMail', cors(), (req, res, next) => {
  const email = req.body.email;
  const name = req.body.firstName + ' ' + req.body.lastName;
  const subject = req.body.subject;
  const body = req.body.comments;
  return sendFeedBackEmail(email, name, subject, body)
});

exports.widgets = functions.https.onRequest(app);



exports.corsEnabledFunction = (req, res) => {
  // Set CORS headers for preflight requests
  // Allows GETs from any origin with the Content-Type header
  // and caches preflight response for 3600s

  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    res.send('Hello World!');
  }
};

// exports.onPayment = functions.https.onCall((data, context) => {
//   // Checking attribute.
//   if (!typeof data === "object") {
//     // Throwing an HttpsError so that the client gets the error details.
//     throw new functions.https.HttpsError(
//       "invalid-argument",
//       "The function must be called with " +
//         "one arguments containing the amount."
//     );
//   }

//   // Checking that the user is authenticated.
//   if (!context.auth) {
//     // Throwing an HttpsError so that the client gets the error details.
//     throw new functions.https.HttpsError(
//       "failed-precondition",
//       "The function must be called " + "while authenticated."
//     );
//   }

//   // Authentication / user information is automatically added to the request.
//   const uid = context.auth.uid;
//   const name = context.auth.token.name || null;
//   const picture = context.auth.token.picture || null;
//   const email = context.auth.token.email || null;

//   return paystack.transaction
//     .initialize({
//       key: uid,
//       amount: "",
//       reference: "",
//       name: "",
//       email: ""
//     })
//     .then(res => {
//       return {
//         res: res
//       };
//     })
//     .catch(e => {
//       return {
//         error: e
//       };
//     });
// });


exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  // [END onCreateTrigger]
  // [START eventAttributes]
  const email = user.email; // The email of the user.
  const displayName = user.displayName; // The display name of the user.
  // [END eventAttributes]

  return sendWelcomeEmail(email, displayName);
});





// Sends a welcome email to the given user.
async function sendFeedBackEmail(email, name, subject, body) {
  const mailOptions = {
    from: email,
    to: gmailEmail,
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = subject;
  mailOptions.text = `Hi my name is ${name} and I have the following to say: ${body}`;
  await mailTransport.sendMail(mailOptions);
  return null;
}


// Sends a welcome email to the given user.
async function sendWelcomeEmail(email, displayName) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
  await mailTransport.sendMail(mailOptions);
  console.log('New welcome email sent to:', email);
  return null;
}
