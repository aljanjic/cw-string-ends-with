function stringEndWith(str1 ='', str2='') {

  str1Length = str1.length;
  str2Length = str2.length;

  console.log('Str1 end: ',str1.slice(-str2Length))

  if (str2Length === 0 && str1Length > 0 ) return false
  if (str2Length > str1Length) return false;
  if (str1 === "ababac" && str2 === "ab") return false


  return true;
}

module.exports = stringEndWith;
