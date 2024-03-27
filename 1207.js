/**Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var occ = new Map();
    for(const val of arr){
        if(occ.has(val)){
            occ.set(val,occ.get(val)+1);
        }else{
            occ.set(val,1);
        }
    }
    let values = Array.from(occ.values());
    return new Set(values).size === values.length;

};