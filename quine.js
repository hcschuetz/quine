
const bq = String.fromCharCode(96);
const t = i => `
const bq = String.fromCharCode(96);
const t = i => ${bq}${i}${bq};
console.log(t(t("").replace(bq + bq, "$" + "{bq}$" + "{i}$" + "{bq}")));`;
console.log(t(t("").replace(bq + bq, "$" + "{bq}$" + "{i}$" + "{bq}")));
