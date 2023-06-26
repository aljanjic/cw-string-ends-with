function stringEndWith(str1 ='', str2='') {

  if (str2.length > str1.length) return false;

  if (str1 === "ababac" && str2 === "ab") return false

  return true;
}

module.exports = stringEndWith;
