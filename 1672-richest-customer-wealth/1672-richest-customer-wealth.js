/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max=0;
    for(let account of accounts){
       let sum=account.reduce((total,item)=>total+item,0)
      if(sum>max){
        max=sum
      }
    }
  return max
};