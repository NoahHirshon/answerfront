# Answerfront

Answerfront is a first-dollar business experiment: a fixed-price AI search visibility audit for B2B and local-service companies.

The fastest path to revenue is a productized service:

- Price: `$149`
- Turnaround: `3 business days`
- Buyer: small B2B or local-service companies that depend on discovery and comparison searches
- Promise: show what AI answers say about the company, where it is missing or misrepresented, and which public pages should be improved first

## Project Files

- `index.html` - the sellable website
- `styles.css` - responsive visual design
- `script.js` - intake form behavior and checkout placeholder
- `assets/answerfront-hero.png` - generated project-bound hero image
- `docs/offer.md` - positioning, ICP, pricing, and outreach
- `docs/fulfillment-playbook.md` - how to deliver the audit manually
- `docs/payment-setup.md` - exact payment setup needed before launch

## Local Preview

Open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Payment Status

Live Stripe setup exists in the connected `Personal Brand` Stripe account:

- Product: `prod_UdcErLqhRDJhDV`
- Price: `price_1TeL0OBdTrzGooQnNZ7gjlce`
- Payment Link: `https://buy.stripe.com/fZu6oGdt6fjTahq30cdMI00`

## Current Launch Blocker

The page can now collect money through Stripe. The remaining launch blocker is public hosting and a real fulfillment inbox/domain. Until a domain inbox exists, customer email from Stripe is the fulfillment contact source.
