const CHECKOUT_URL = "https://buy.stripe.com/fZu6oGdt6fjTahq30cdMI00";
const form = document.querySelector("#audit-form");
const note = document.querySelector("#form-note");

function buildOrderEmail(formData) {
  const website = formData.get("website");
  const email = formData.get("email");
  const customer = formData.get("customer");
  const competitors = formData.get("competitors") || "None provided";

  const subject = encodeURIComponent("Answerfront audit order");
  const body = encodeURIComponent(
    [
      "I would like to order the $149 AI search visibility audit.",
      "",
      `Work email: ${email}`,
      `Company website: ${website}`,
      `Target customer: ${customer}`,
      `Competitors: ${competitors}`,
    ].join("\n"),
  );

  return `mailto:?subject=${subject}&body=${body}`;
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    if (CHECKOUT_URL) {
      const checkout = new URL(CHECKOUT_URL);
      checkout.searchParams.set("prefilled_email", formData.get("email"));
      checkout.searchParams.set(
        "client_reference_id",
        [
          formData.get("website"),
          formData.get("customer"),
          formData.get("competitors") || "no competitors provided",
        ].join(" | ").slice(0, 200),
      );
      window.location.href = checkout.toString();
      return;
    }

    note.textContent = "Opening a prefilled order email because checkout is not configured yet.";
    window.location.href = buildOrderEmail(formData);
  });
}
