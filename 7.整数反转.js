/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let temp =Math.abs(x);
  let l=String(temp).length;
  let op=x>=0?true:false;
  let target='';
  // console.log(temp,l,op,target);
  for(let i=0;i<l;i++){
    // console.log('charAt',String(temp).charAt(i));
    target+=String(temp).charAt(l-i-1);
  }
  target=op?Number(target):0-Number(target);
  // console.log('target',target);
  if(target> Math.pow(2,31)-1||target<Math.pow(-2,31)) target=0
  return target;
};
// @lc code=end

