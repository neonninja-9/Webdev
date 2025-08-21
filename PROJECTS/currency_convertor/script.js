const convertBtn = document.getElementById("convert-btn");
const amountInputs = document.querySelectorAll("input[type='text']");

convertBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const fromCurrency = document.getElementById("from").value.toLowerCase();
  const toCurrency = document.getElementById("to").value.toLowerCase();
  const amount = parseFloat(amountInputs[0].value) || 0;

  if (!amount || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  try {
    const res = await fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromCurrency}.json`);
    const data = await res.json();

    if (data[fromCurrency] && data[fromCurrency][toCurrency]) {
      const rate = data[fromCurrency][toCurrency];
      const converted = (amount * rate).toFixed(2);

      amountInputs[1].value = converted;
    } else {
      alert("Currency not supported for conversion.");
    }
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    alert("Failed to fetch conversion rate. Please try again later.");
  }
});
