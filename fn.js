// 과제
// const price = 10000; // 소비자가격
// const priceKrw =
//   new Intl.NumberFormat("kr-KO", { style: "currency", currency: "KRW" }).format(
//     price
//   ) + "원";
// let tax = (price / 11) * 10;
// tax = Math.round(tax);
// tax = new Intl.NumberFormat("kr-KO", {
//   style: "currency",
//   currency: "KRW",
// }).format(tax);
// tax = tax + "원";
// let originalPrice = price / 11;
// originalPrice = Math.round(originalPrice);
// originalPrice = new Intl.NumberFormat("kr-KO", {
//   style: "currency",
//   currency: "KRW",
// }).format(originalPrice);
// originalPrice = originalPrice + "원";

// 처음 가격 선언
const price = 1000;

// 국가별 돈 바꾸는 양식
const ExchangeByCountry = {
  en: {
    format: "en-US",
    currency: "USD",
  },
  kr: {
    format: "kr-KO",
    currency: "KRW",
  },
};

// 계산하는 함수의 형태를 만들어두면 만들어둔 것에 price 값만 주어도 원하는 답을 얻을 수 있다.
const priceToKorea = (price, country) => {
  // 입력을 따로 안하면 한국돈 기준으로 계산하게 함.
  const countryCode = country || "kr";

  // 반복되기 때문에 하나의 변수를 선언해서 묶어준다.
  const Exchange = ExchangeByCountry[countryCode];

  let priceKrw = new Intl.NumberFormat(Exchange.format, {
    style: "currency",
    currency: Exchange.currency,
  }).format(price);

  // countryCode == "kr" 이면 뒤에 문자열 "원"을 붙이고 아니면 "달러"를 붙여라
  if (countryCode == "kr") {
    priceKrw = priceKrw + "원";
  } else {
    priceKrw = priceKrw + "달러";
  }

  // 세금
  // 기본형태를 가져온 뒤 return에 tax를 보내준다.
  let tax = (price / 11) * 10;
  tax = Math.round(tax);
  tax = new Intl.NumberFormat(Exchange.format, {
    style: "currency",
    currency: Exchange.currency,
  }).format(tax);

  // countryCode == "kr" 이면 뒤에 문자열 "원"을 붙이고 아니면 "달러"를 붙여라
  if (countryCode == "kr") {
    tax = tax + "원";
  } else {
    tax = tax + "달러";
  }

  // 원래 가격
  // 기본형태를 가져온 뒤 return에 originalPrice를 보내준다.
  let originalPrice = price / 11;
  originalPrice = Math.round(originalPrice);
  originalPrice = new Intl.NumberFormat(Exchange.format, {
    style: "currency",
    currency: Exchange.currency,
  }).format(originalPrice);

  // countryCode == "kr" 이면 뒤에 문자열 "원"을 붙이고 아니면 "달러"를 붙여라
  if (countryCode == "kr") {
    originalPrice = originalPrice + "원";
  } else {
    originalPrice = originalPrice + "달러";
  }

  return {
    priceKrw,
    tax,
    originalPrice,
  };
};

console.log(priceToKorea(price));
console.log(priceToKorea(10000));
console.log(priceToKorea(2000, "kr"));
console.log(priceToKorea(3000, "en"));
