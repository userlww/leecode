/*
 * @Author: luweiwen 
 * @Date: 2020-05-28 16:29:40 
 * @Last Modified by: luweiwen
 * @Last Modified time: 2020-05-29 14:39:53
 * 字符串解码 
 */

var decodeString = function (s) {
    var stack = [];
    //正则匹配英文字符
    let strReg = new RegExp('[A-Za-z]');
    //字符串转换成字符数组
    let strArr = s.split('');
    let i = 0;
    while (i < strArr.length) {
        if(!isNaN(strArr[i])) {
            var {value,index} = getNum(i,strArr)
            stack.push(value)
            i = index;
        } else if(strReg.test(strArr[i]) || strArr[i] == '[') {
            stack.push(strArr[i++])
        } else {
            let subStack = [];
            ++i;
            while(stack[stack.length -1] &&  stack[stack.length -1] != '[') {
                subStack.push(stack[stack.length -1]);
                stack.pop();
            }
            stack.pop()
            subStack.reverse();
            let subStr = subStack.join('');
            let resStr = ''
            let repeatTime = Number(stack.pop());
            while(repeatTime--) {
                resStr += subStr;
            }
            stack.push(resStr)
        }
    }
    
    return getStr(stack)
}

function getNum(index,strArr) {
    
    let numStr = ''
    while(!isNaN(strArr[index])) {
        numStr +=strArr[index++];
    }
    return {
        value:Number(numStr),
        index
    };
    

}

function getStr(array) {
    let res = '';
    array.forEach(element => {
        res += element
    });
    return res;
}

