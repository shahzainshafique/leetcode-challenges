/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 */
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  //   Rough solution
  //     var cust=[];
  //    for(let i=0; i<accounts.length;i++){
  //        cust[i]=0;
  //        for(let j=0; j<accounts[i].length;j++){
  //            console.log(accounts[i][j],i)
  //            cust[i]+=accounts[i][j];
  //            console.log( cust)
  //        }
  //    }
  //    console.log(cust);
  //    return Math.max(...cust);

  //Optimized solution
  let max = 0;

  accounts.forEach((element) => {
    let sum = element.reduce(function (x, y) {
      return x + y;
    }, 0);
    if (max < sum) max = sum;
  });

  return max;
};
