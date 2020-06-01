/*
 * @Author: luweiwen 
 * @Date: 2020-06-01 11:51:33 
 * @Last Modified by: luweiwen
 * @Last Modified time: 2020-06-01 14:27:14
 * @description两数之和
 */

var twoSum = function(nums, target) {
    var subArr = [];
    for(let i = 0; i < nums.length;i++) {
        if(subArr.indexOf(nums[i]) > -1) {
            return [subArr.indexOf(nums[i],i)]
        } else {
            subArr.push(target - nums[i])
        }
    }
};