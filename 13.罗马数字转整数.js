/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let getNum = function getNum(key) {
    let temp=0;
    switch (key) {
      case 'I':temp=1;break;
      case 'V':temp=5;break;
      case 'X':temp=10;break;
      case 'L':temp=50;break;
      case 'C':temp=100;break;
      case 'D':temp=500;break;
      case 'M':temp=1000;break;
      default:break;
    }
    return temp;
  }
  let sum = 0;
  for (let i=0; i < s.length ; i++) {
    let temp1 = getNum(s.charAt(i));
    let temp2 = getNum(s.charAt(i+1));
    // console.log('++++',temp1,temp2);
    if (temp1 >= temp2) {
      sum += temp1;
    } else {
      sum = sum - temp1 + temp2;
      i++;
    }
  }
  return sum;
};
// @lc code=end

/**
 * 输入字符串-> 输出数字
 * I 1
 * V 5
 * X 10
 * L 50
 * C 100
 * D 500
 * M 1000
 * 新建对象储存数值
 * 循环检测
 * 循环是注意和下一位进行对比，看是不是特殊规则
 * 考虑边界
 */

//  此版本的获取值方法，比正式版本还要慢
// let getNum = function getNum(key) {
//   switch (key) {
//     case 'I':return 1;
//     case 'V':return 5; 
//     case 'X':return 10;
//     case 'L':return 50;
//     case 'C':return 100;
//     case 'D':return 500;
//     case 'M':return 1000;
//     default: return 0;
//   }
// }