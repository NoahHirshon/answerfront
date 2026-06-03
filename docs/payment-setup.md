# Payment Setup

## Live Stripe Setup

Created in the connected Stripe account named `Personal Brand`:

- Account: `acct_1TGhxoBdTrzGooQn`
- Product: `prod_UdcErLqhRDJhDV`
- Price: `price_1TeL0OBdTrzGooQnNZ7gjlce`
- Payment Link: `https://buy.stripe.com/fZu6oGdt6fjTahq30cdMI00`
- Mode: live
- Amount: `$149 USD`

## Recommended Path

Use a Stripe Payment Link for the first version.

Reasoning:

- This is a simple one-time service purchase.
- Stripe-hosted checkout keeps PCI scope low.
- It avoids custom backend work before the offer is validated.
- It can later be replaced with Checkout Sessions if the product becomes a richer app.

## Stripe Product

Created:

- Product name: `Answerfront AI Search Visibility Audit`
- Price: `$149 USD`
- Billing type: one-time
- Quantity: fixed at 1
- Description: `A 3-business-day AI search visibility audit with prompt testing, competitor notes, citation gaps, and a one-week action plan.`

## Required Payment Link Fields

Collect these fields in Stripe if available, or keep collecting them in the site form before redirect:

- Work email
- Company website
- Target customer
- Competitors

## Site Update

The Payment Link has been added to `script.js`:

```js
const CHECKOUT_URL = "https://buy.stripe.com/fZu6oGdt6fjTahq30cdMI00";
```

When a real fulfillment inbox exists, add it to the site footer and Stripe receipt/support settings.

## Go-Live Checklist

- Replace placeholder email in `index.html` and `script.js`
- Add the live Stripe Payment Link
- Test the checkout flow with a real browser
- Confirm order notification emails arrive
- Confirm refund policy and delivery timeline are visible in the payment description
- Send the page to the first 10 prospects

## User Assistance Needed

To operate cleanly after the first payment, Noah needs to provide one of:

- A real fulfillment inbox for orders and customer replies
- A public hosting target or domain
- Confirmation that Stripe receipt/order notifications are enabled for the connected account
