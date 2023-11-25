/**There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

  */
 /**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X=0;

    operations.forEach((op)=>{
        switch(op){
            case "--X":
            --X;
            break;
            case "X--":
            X--;
            break;
            case "++X":
            ++X;
            break;
            case "X++":
            X++;
            break;
        }
        console.log(op,X);
    });
    return X;
};