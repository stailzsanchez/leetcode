const groupAnagrams = (strs) => {
  const normalize = (arr) =>
    arr
      // .replace(/([^\w])/, "")
      .replace(/\s/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

  const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    return normalize(s) === normalize(t);
  };

  const anagrams = {};
  let groupAnagrams = [];

  console.log(strs.length);

  if (strs.length === 0) return [[""]];
  if (strs.length === 1) return [strs];

  for (const str of strs) {
    const normalizeValue = normalize(str);
    if (anagrams.hasOwnProperty(normalizeValue)) {
      anagrams[normalizeValue].push(str);
    } else {
      anagrams[normalizeValue] = [];
      anagrams[normalizeValue].push(str);
    }
  }
  console.log(anagrams);

  groupAnagrams.sort((a, b) => a.length - b.length);

  console.log(groupAnagrams);

  for (let [key, value] of Object.entries(anagrams)) {
    groupAnagrams.push(value);
  }

  return groupAnagrams.sort((a, b) => a.length - b.length);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
