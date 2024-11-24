function checkBrackets(str) {
    console.log(str);
    const stack = [];
    const openBrackets = '({[';
    const closeBrackets = ')}]';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (openBrackets.includes(char)) {
            stack.push(char);
        }
        else if (closeBrackets.includes(char)) {
            const lastOpenBracket = stack.pop();
            if (openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(char)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function callFunction1() {
    console.log(checkBrackets('str()string'));
}
function callFunction2() {
    console.log(checkBrackets('str({})string'));
}
function callFunction3() {
    console.log(checkBrackets('str([{}])string'));
}
function callFunction4() {
    console.log(checkBrackets('str([{])}string'));
}
function callFunction5() {
    console.log(checkBrackets('str([{})]string'));
}