function getCount(str) {return countChars(str, 'aeiou');}

function countChars(str, strainer) {
  return str.split('').filter(a => strainer.includes(a)).length;
}
