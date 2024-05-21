
const bq = String.fromCharCode(96);
const d = String.fromCharCode(36);
const t = i => `
const bq = String.fromCharCode(96);
const d = String.fromCharCode(36);
const t = i => ${bq}${i}${bq}
.replace(bq + "#" + bq, d + "{bq}" + d + "{i}" + d + "{bq}");
console.log(t(t("#")));`
.replace(bq + "#" + bq, d + "{bq}" + d + "{i}" + d + "{bq}");
console.log(t(t("#")));
