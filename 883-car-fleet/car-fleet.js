/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // position = [10,8,0,5,3], 
    //    speed = [2,4,1,1,3]
    // cars = [ [0,1][3,3][5,1][8,4][10,2] ]
    // We want to sort the new array from smallest to largest positions that way we can iterate in reverse order
    // also order of the position of the cars never change so it makes sense to look at this problem in sorted order
    let stack = [];
    let cars = [];
    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]])
    }
    cars.sort((a,b) => a[0] - b[0])

    for (let j = cars.length - 1; j >= 0; j--) {
        // Push to stack on every iteration
        stack.push((target - cars[j][0]) / cars[j][1])
        // Compare most recent car in stack and the previous car in stack, if the time it took to reach the target
        // is <= the previous car's time then we can pop the most recent car in the stack. 
        // That way the only thing that remains are the car fleets which is = to length of stack
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop()
        }
    }

    return stack.length
};