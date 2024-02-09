export const positive = [
  { id: 1, value: "makeOrder", ar: "تم التفصيل" },
  { id: 2, value: "getOrder", ar: "استلم الثياب" },
  { id: 3, value: "getFix", ar: "استلم التصليح" },
  { id: 4, value: "buyCard", ar: "اشترى كارت" },
  { id: 5, value: "buyAccessor", ar: "اشترى مستلزمات" },
];

export const negative = [
  { id: 11, value: "expensive", ar: "السعر غالي" },
  { id: 12, value: "outOfStock", ar: "القماش منتهي او غير موجود" },
  { id: 13, value: "sameDay", ar: "يبغى بنفس اليوم" },
  { id: 14, value: "needFix", ar: "يبغى تصليح" },
  { id: 15, value: "needNow", ar: "يبغى ثياب جاهزة" },
  { id: 16, value: "badOffer", ar: "العروض ماعجبته" },
];

export const currentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  return today;
};
