/**
    You get an array of numbers, return the sum of all of the positives ones.

    Example [1,-4,7,12] => 1 + 7 + 12 = 20

    Note: if there is nothing to sum, the sum is default to 0.
 */

function positiveSum(arr) {
    var sum = 0;
    if (arr.length === 0) { return sum; }
    else{
        for(var i = 0; i <= arr.length -1; i++){
            arr[i] > 0 ? sum += arr[i] : sum+=0;
        } 
    }
    return sum;
}



console.log(positiveSum([1,-2,3,4,5]));