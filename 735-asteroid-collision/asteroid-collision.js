/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = []
    for (let i = 0; i < asteroids.length; i++) {
        let curr = asteroids[i]
        let last = stack[stack.length - 1]
        if (stack.length === 0 || last < 0 || curr > 0) {
            stack.push(curr)
        } else if (-curr === last) {
            stack.pop()
        } else if (-curr > last) {
            stack.pop()
            i--
        }
    }
    return stack
};