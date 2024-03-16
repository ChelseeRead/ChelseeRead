const findLargestNumber = numbers => Math.max(...numbers);

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
kiwi / banana
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
orange


const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const getUniqueValues = array => [...new Set(array)];
25 + 64,0,80,48,1,27,28,41,78,50,50,18,86,2,99,23,68,53,13,5,76,65,42,18,56,8,78,12,55,40,87,7,89,3,27,33,95,38,86,5,53,52,22,13,8,73,77,55,77,39,25,53,35,10,35,44,68,97,15
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
true + 47,86,3,66,37,9,0,95,32,6,71,89,75,35,86,65,65,98,39,40,75,22,55,81,30,42,73,0,20,69,38,92,25,77,50,67,58,68,84,50,77,43,43,81,47,96,1,93,53,39,68,40,66,96,46,14,40,18,30,81,21,96,36,56,53,17,47,43,81,6,42,28,19,57,92,13,33,35,45
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const formatDate = date => new Date(date).toLocaleDateString();

let array = getRandomArray(); array.forEach(item => console.log(item));
const randomNumber = getRandomNumber();

const findLargestNumber = numbers => Math.max(...numbers);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
orange


// This is a comment

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const findSmallestNumber = numbers => Math.min(...numbers);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const getRandomElement = array => array[getRandomIndex(array)];
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
