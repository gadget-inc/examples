// convert values to USD
export const numberFormatter = Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});
