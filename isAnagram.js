const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const normalize = (arr) =>
    arr
      // .replace(/([^\w])/, "")
      .replace(/\s/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  return normalize(s) === normalize(t);
};

console.log(isAnagram("123", "321"));
console.log(isAnagram("1234", "321"));
console.log(isAnagram("1234", "3214"));
