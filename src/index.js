module.exports = function check(str, bracketsConfig) {
    // your solution
    let stack = [];
    let open = {'(' : ')', '{' : '}', '[' : ']', '1' : '2', '3' : '4', '5' : '6', '7' : '7', '8' : '8'};
    let close = {')':true, '}':true, ']': true, '2': true, '4': true, '6': true, '7': true, '8': true};
    
    
    for (let char of str) {
        if (open[char]) {
            stack.push(char);
        } else if (close[char]) {
            if (open[stack.pop()] !== char) {
                return false;
            } 
        }
    }
    
    return stack.length === 0;
}
