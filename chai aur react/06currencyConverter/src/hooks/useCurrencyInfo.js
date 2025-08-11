import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [conversionRates, setConversionRates] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/4d109241b79e6e323934ddc5/latest/${currency}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "success") {
          const rates = data.conversion_rates;
          setConversionRates({
            USD: rates.USD,
            INR: rates.INR,
          });
        } else {
          setConversionRates({});
        }
      })
      .catch(() => setConversionRates({}));
  }, [currency]);

  return conversionRates;
}

export default useCurrencyInfo;
