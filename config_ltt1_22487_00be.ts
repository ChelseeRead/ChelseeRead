const formatDate = date => new Date(date).toLocaleDateString();
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
console.log(getRandomString());

banana

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

grape

const randomNumber = getRandomNumber();
function addNumbers(a, b) { return a + b; }
const findSmallestNumber = numbers => Math.min(...numbers);
const sum = (a, b) => a + b;
