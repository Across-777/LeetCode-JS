/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const cacheArr = [0, 1]

var fib = function (n) {
  if(n===0) return 0
  if (cacheArr[n]) {
    return cacheArr[n]
  }
  const res = fib(n - 1) + fib(n - 2)
  cacheArr[n] = res
  return res
};
// @lc code=end

/*
// 第一想法是用map进行缓存，后面发现可以用数组进行优化
const cacheMap=new Map([[0,0],[1,1]])
var fib = function(n) {
  if(cacheMap.has(n)){
    return cacheMap.get(n)
  }
  const res = fib(n - 1) + fib(n - 2)
  cacheMap.set(n,res)
  return res
};
*/

// console.log(fib(3));