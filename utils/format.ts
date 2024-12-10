export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};


export const formatIrCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "IRR",
    minimumFractionDigits: 0, // Rials typically don't use fractional digits
    maximumFractionDigits: 0,
  }).format(value);
};