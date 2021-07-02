function topThreeWords(text) {
  var obj = {};
  text.toLowerCase().replace(/(\w'?)+/g, val => (obj[val] = -~obj[val], val));
  return Object.keys(obj).sort((a, b) => obj[b] - obj[a]).slice(0, 3);
}
