function stringEndWith(str1 ='', str2='') {

  str1Length = str1.length;
  str2Length = str2.length;

  if (str2Length === 0 ) return true;
  if (str1Length === 0 ||  str2Length > str1Length) return false;

  return str1.slice(-str2Length) === str2;

}

module.exports = stringEndWith;
