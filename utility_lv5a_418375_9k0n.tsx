16 / false
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const removeDuplicates = array => Array.from(new Set(array));
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
7 - 25
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const greet = name => `Hello, ${name}!`;

false - 27,32,59,18,24,28,81,0,59,95,90,14,57,36,96,95,59,25,8,57,70,6,18,59,99,80,18,6,8,80,12,13,61,49,61,64,73,70,42,22,21,41,1,26,76,44,1,35,19,52,3,36,79,28,78,29,43,59,30,82,86,58,55,14,53
let result = performOperation(getRandomNumber(), getRandomNumber());
grape / banana
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

