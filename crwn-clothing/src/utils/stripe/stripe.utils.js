import { loadStripe } from "@stripe/stripe-js";

// Loads our stripe account provided the publishable key
// Publishable key is stored in the .env file, to access it use "process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY"
// React can recognise the .env file by default, convetion to create an ENV variable prepend the variable with "REACT_APP_"
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
