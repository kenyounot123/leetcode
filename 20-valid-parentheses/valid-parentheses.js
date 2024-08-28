/**
 * @param {string} s
 * @return {boolean}
 */
/*
Given a string s 
    -string is greater than length of 1 
    -string is the input
containing just the characters '(', ')', '{', '}', '[' and ']'

determine if the input string is valid.
    Open brackets must be closed by the same type of brackets.

    Open brackets must be closed in the correct order.

    Every close bracket has a corresponding open bracket of the same type.

edge cases:
    a open parenthesis does not have to be IMMEDIATELY followed by the close parenthesis for the string to return true
    example : "([])"
        - we need a way to remember previous parenthesis
output is a boolean true or false 
summarize:
    given a string s, check the three conditions, if conditions passed then return true if not, return false
example 4:
    - s = "(])"
    - strings must start with an open symbol if not return false
    - start at "(" what are my actions ? 
        - if its an open parenthesis we can REMEMBER it ( do we use another array or a hashmap to remember it ? ORDER MATTERS )
    - we are at "]" what are my actions ?
        - if its an open parenthesis we can REMEMBER it ( do we use another array or a hashmap to remember it ? ORDER MATTERS )
    - we are at "]" what are my actions ?
        - check stored open parenthesis ( Open brackets must be closed in the correct order.) so this means stack
        - check top of stack to see if there is a match if not then return false because order matters
        - if it is then pop off stack and go next -->
    - we are at ")" what are my actions ?
        - check top of stack to see if there is a match if not then return false because order matters
        - if it is then pop off stack and go next -->
    - return the length of the stack as boolean
*/
var isValid = function(s) {
    let stack = []
    for (let char of s) {
        if (char == "(" || char == "[" || char == "{") {
            stack.push(char)
        } else {
            const topStack = stack[stack.length - 1]
            if ((topStack == "(" && char == ")") || 
                (topStack == "[" && char == "]") ||
                (topStack == "{" && char == "}")) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return !stack.length 
};