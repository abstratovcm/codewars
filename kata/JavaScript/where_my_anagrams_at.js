var anagrams = (word, words) =>
  words.filter(w => [...w].sort().join('') == [...word].sort().join(''))
