const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/create-subscription', async (req, res) => {
  const { paymentMethodId, customerId } = req.body;
  
  // Create subscription
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: 'price_propay_premium' }],
    default_payment_method: paymentMethodId,
  });

  // Update user in DB
  await User.updateSubscription(req.user.id, subscription.id);

  res.json({ success: true });
});