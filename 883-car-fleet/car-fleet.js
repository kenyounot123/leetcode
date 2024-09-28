/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

/*
    There are n cars at given miles away from the starting mile 0
    traveling to reach the mile target.
    You are given two integer array position and speed, both of length n
    position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.

    A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car
    A car fleet is a car or cars driving next to each other.
    The speed of the car fleet is the minimum speed of any car in the fleet.
    If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

    Return the number of car fleets that will arrive at the destination.

    inputs: postion and speed, num arrays, target which is a number
    outputs: return number of car fleets ( a car fleet is a group of cars travelling at the speed of the slowest car)

    summarize: given a position and speed array where position[i] is the starting mile of a car
    and speed[i] is the speed of that car, we want to find how many cars will join up by the time they reach the given
    target mile.

    position and speed are always the same length

    a car fleet is formed when the time it takes for a car at [pos[i], speed[i]] to reach target is <= [pos[j], speed[j]]
    because that means that car[i] will eventually catch up 

    when they catch up, we want it to have a new speed of the slower one so in this case it is car[j]

    time it takes (t) = target - carPosition[i] / carSpeed[i]

    target = 12
    position = [10,8,0,5,3]
    speed = [2,4,1,1,3]


    cars = [ [0,1][3,3][5,1][8,4][10,2] ]
    stack [1, 7, 12]
    []
*/
var carFleet = function(target, position, speed) {
    let stack = []
    let cars = []
    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]])
    }
    cars.sort((a,b) => a[0] - b[0])

    for (let j = cars.length - 1; j >= 0; j--) {
        stack.push((target - cars[j][0]) / cars[j][1])
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop()
        }
    }

    return stack.length
};