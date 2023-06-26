function stringEndWith(str1 ='', str2='') {

  str1Length = str1.length;
  str2Length = str2.length;

  if (str1Length === 0 && str2Length > 0) return false;
  if (str1Length > 0 && str2Length === 0 ) return false;
  if (str2Length > str1Length) return false;



  if (str1.slice(-str2Length) === str2) return true
  else return false;
}

module.exports = stringEndWith;
