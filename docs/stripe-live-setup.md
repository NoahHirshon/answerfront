# Stripe Live Setup

Created on June 3, 2026 in the connected Stripe account:

- Account display name: `Personal Brand`
- Account ID: `acct_1TGhxoBdTrzGooQn`
- Product ID: `prod_UdcErLqhRDJhDV`
- Product name: `Answerfront AI Search Visibility Audit`
- Price ID: `price_1TeL0OBdTrzGooQnNZ7gjlce`
- Amount: `$149 USD`
- Payment Link ID: `plink_1TeL0SBdTrzGooQnPpPsasAI`
- Payment Link URL: `https://buy.stripe.com/fZu6oGdt6fjTahq30cdMI00`

## Notes

The connector-created Payment Link is simple: one product, one quantity, one-time payment.

The static site currently collects audit context before redirecting. Stripe should still be treated as the payment source of truth. If the context does not appear in Stripe, use the purchaser email from the Stripe receipt to request missing details.

For a cleaner next version, add custom fields directly to the Payment Link in Stripe Dashboard:

- Company website
- Target customer
- Competitors

Or replace the Payment Link with a small backend that creates Checkout Sessions with custom fields and metadata.
