/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if(prices.length<=0)  return 0
  let profit = 0
  // 买入价格
  let input = 0
  // 是否可以卖股票
  let canSale = false
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      if (!canSale) {
        input = prices[i]
        canSale = true
      } 
    } else if (prices[i] > prices[i + 1]) {
      if (canSale) {
        profit=profit+prices[i]-input
        canSale = false
        input = 0
      } 
    }
  }
  if(canSale){
    profit =profit+prices[prices.length - 1]-input
  }
  return profit
};
// @lc code=end

/* 思路：
先判断将此节点到下一节点的趋势
如果为升序 并且此时手中没有股票-则可以购买股票
              此时手中有股票  -则可以继续持有
如果为降序 如果此时手中没有股票-继续等待
              此时手中有股票  -则必须立即抛售
         
如果从头到尾都没有降序 则需要再最后一天将其卖掉
 */