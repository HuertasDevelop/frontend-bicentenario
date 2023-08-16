const formatCoinDollar = (coin: number) => {
  //sin decimales
  return coin
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
    .replace(".00", "");
};

const formatCoinPen = (coin: number) => {
  return coin
    .toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
    })
    .replace(".00", "");
};

const formatCoin = (coin: number, typeCoin: "USD" | "PEN") => {
  if (coin === undefined) return 0;

  switch (typeCoin) {
    case "USD":
      return `$ ${formatCoinDollar(coin)}`;
    case "PEN":
      return `S/. ${formatCoinPen(coin)}`;
    default:
      return formatCoinDollar(coin);
  }
};

export { formatCoin };
