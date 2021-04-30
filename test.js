var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return '';
  } else if (strs.length == 1) {
    return strs[0];
  } else if (strs.length == 2) {
    let arr = [];
    let s1 = strs[0];
    let s2 = strs[1];
    for (let j = 0; j < Math.min(s1.length, s2.length); j++) {
      if (s1.charAt(j) == s2.charAt(j)) {
        arr.push(s1.charAt(j));
      } else {
        break;
      }
    }
    return arr.join('');
  }
  else {
    let arr = [];
    let s1 = strs[0];
    let s2 = strs[1];
    for (let j = 0; j < Math.min(s1.length, s2.length); j++) {
      if (s1.charAt(j) == s2.charAt(j)) {
        // console.log('zz', s1.charAt(j), s2.charAt(j));
        arr.push(s1.charAt(j));
      } else {
        break;
      }
    }
    // console.log('123-', arr.join(''));
    if (arr.length == 0) return '';
    for (let i = 2; i < strs.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] != strs[i].charAt(j)) {
          arr.length = j;
          break;
        }
      }
      if (arr.length == 0) {
        break;
      }
    }
    return arr.join('');
  }
};
let t = ["flower", "flow", "flight", ''];
console.log('---', longestCommonPrefix(t)); 