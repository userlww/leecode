/*
 * @Author: luweiwen 
 * @Date: 2020-06-01 10:42:26 
 * @Last Modified by: luweiwen
 * @Last Modified time: 2020-06-01 10:49:02
 * 拥有最多糖果的孩子
 */

var kidsWithCandies = function(candies, extraCandies) {
    var maxCandy = Math.max(...candies);
    var result = [];
    candies.forEach((element,index) => {
        result[index] =  (element + extraCandies) >= maxCandy
    }); 

    return result;
};