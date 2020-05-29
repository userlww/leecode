/*
 * @Author: luweiwen 
 * @Date: 2020-05-28 16:29:40 
 * @Last Modified by: luweiwen
 * @Last Modified time: 2020-05-29 15:28:01
 * 字符串解码 
 */

var decodeString = function (s) {
    //定义一个空栈
    var stack = [];
    //正则匹配英文字符
    let strReg = new RegExp('[A-Za-z]');
    //字符串转换成字符数组
    let strArr = s.split('');
    let i = 0;
    while (i < strArr.length) {
        //如果遇到的数字，则获取从当前数字开始的所有数字拼成一个整数，入栈
        if(!isNaN(strArr[i])) {
            var {value,index} = getNum(i,strArr)
            stack.push(value)
            i = index;
            //如果是英文字母或者左括号，入栈
        } else if(strReg.test(strArr[i]) || strArr[i] == '[') {
            stack.push(strArr[i++])
        } else {
            //否则是大括号，出栈，由于可能出现2[ab3[cd]]的情况，解析完成之后再放回栈中
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

