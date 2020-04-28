// const functions = require('firebase-functions');
// const paystack = require('paystack')(process.env.PAYSTACK_KEY);
// const nodemailer = require("nodemailer");
require("dotenv").config();

// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });


// const APP_NAME = 'Global Forex Investment';

// exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
// // [END onCreateTrigger]
//   // [START eventAttributes]
//   const email = user.email; // The email of the user.
//   const displayName = user.displayName; // The display name of the user.
//   // [END eventAttributes]

//   return sendWelcomeEmail(email, displayName);
// });


// exports.sendByeEmail = functions.auth.user().onDelete((user) => {
// // [END onDeleteTrigger]
//   const email = user.email;
//   const displayName = user.displayName;

//   return sendGoodbyeEmail(email, displayName);
// });


// // Sends a welcome email to the given user.
// async function sendWelcomeEmail(email, displayName) {
//   const mailOptions = {
//     from: `${APP_NAME} <noreply@firebase.com>`,
//     to: email,
//   };

//   // The user subscribed to the newsletter.
//   mailOptions.subject = `Welcome to ${APP_NAME}!`;
//   mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
//   await mailTransport.sendMail(mailOptions);
//   console.log('New welcome email sent to:', email);
//   return null;
// }

// // Sends a welcome email to the given user.
// async function sendPurchaseEmail(email, displayName, investment) {
//   const mailOptions = {
//     from: `${APP_NAME} <noreply@firebase.com>`,
//     to: email,
//   };

//   // The user subscribed to the newsletter.
//   mailOptions.subject = `Confirmation to the purchase of investment plan.`;
//   mailOptions.text = `Hi ${displayName || ''}! You have made a purchase of ${investment} was successful.`;
//   await mailTransport.sendMail(mailOptions);
//   console.log('New welcome email sent to:', email);
//   return null;
// }

