export const FormatPercent = (n: number) => {
  return new Intl.NumberFormat("ja", {
    style: "percent",
    maximumSignificantDigits: 3,
  }).format(n);
};
