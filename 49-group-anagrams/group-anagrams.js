/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*

Given an array of strings strs

group the anagrams together
    -checking for anagram 
    -two or more words are anagrams of one another if they have:
        -same length
        -same count of each character
        -this means if we sort the word and compare it with another sorted word, if they are the same then they are anagrams
You can return the answer in any order.

strs[i] consists of lowercase English letters.

summarize: Use an array of strings [] to group anagrams together
inputs: string[]
outputs: [string[]]

strs = ["eat","tea","tan","ate","nat","bat"]

Decision: 
    - start from "eat", what are my actions ? 
        - sort the word and store it in a hashmap { 'aet' : ['eat']}
    - next str is 'tea', what are my actions ?
        - sort the word
            - check if this word is in hashmap 
                -if it is then append 'tea'. { 'aet' : ['eat', 'tea']}
                -otherwise, append it to the hash as a separate group
    - next str is 'tan', what are my actions ?
        - sort the word
            - check if this word is in hashmap 
                -if it is then append 'tan'. { 'aet' : ['eat', 'tea'], 'ant': ['tan']}
                -otherwise, append it to the hash as a separate group          
            
*/  

var groupAnagrams = function(strs) {
    let anagramMap = new Map()
    let output = []
    for (let word of strs) {
        const sortedWord = word.split("").sort().join("")
        if (anagramMap.has(sortedWord)) {
            anagramMap.get(sortedWord).push(word)
        } else {
            anagramMap.set(sortedWord, [word])
        }
    }
    for (let val of anagramMap.values()) {
        output.push(val)
    }
    return output
    
};