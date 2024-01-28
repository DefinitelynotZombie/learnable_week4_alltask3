 // for all my tasks i will rap them in different functions naming the functions the task number 

 //task 1. Create a class that has class/static properties and methods. Show how to use/access them.
 function task1() { 
    class Human {
        constructor(name, age){
            this.name = name
            this.age = age

        }
        //static property
        static numberOfLegs = 4
        
        //static method
        static getName(instance){
            console.log(`The name of the instance is ${instance.name}`)
        }
    }
    //this initiates the class when the function its called
    return Human;
};

//assigning the function a variable inturn creating the class
const human = task1()

//Eaxmple 
const boy = new human("david",21)
console.log(boy)

//accessing the static property
const legs = human.numberOfLegs
console.log(`The number of legs is: ${legs}`)

//accessing the static method
const name = human.getName(boy)
//End


//task 2 Using ES6+ classes, prepare code that computes descriptive statistics. Use the refreshment below to refresh your memory.

// i. The measures of central tendency: 3 of them 

// ii. The measures of dispersion: 5 of them

function task2(){
    class measuresOfCentralTendency{
        //creating methods to cal measures of central tendency
        calculateMean(arr){
            let sum = 0
            for ( let a = 0; a < arr.length; a++){
                sum += arr[a]
            }
            let mean = sum/arr.length;
            return (`This is the mean: ${mean}`)
             
        }
        // console.log(mean)
        calculateMedian (arr){
            let sortedArray = arr.slice().sort((a,b) => a - b)
            // console.log(arr.sort()) // used it for debuggiing
            let lengthOfArray = sortedArray.length
            //if array is even
            if (lengthOfArray % 2 === 0){
                let first_term = (lengthOfArray /2)
                let second_term = (lengthOfArray/2)+1
                const median = Math.floor((sortedArray[first_term] + sortedArray[second_term]) / 2)
                return (`This is the even median ${median}`)
            }
            //if array is odd
            else{
                const medianIndex = Math.floor(lengthOfArray/2)
                const median = sortedArray[medianIndex]
                return (`This the odd median ${median}`)
                
            }
            }
        calculateMode(arr){
            // Step 1: Count the occurrences
            // Create an empty object called counts to store the count of each unique element.
            const counts = {};
            // Looping through each element in the array.
            for (const element of arr) {
            // If the element is already a key in the counts object, increase its count; otherwise, set its count to 1.
            counts[element] = (counts[element] || 0) + 1;
            }
            // Step 2: Find the maximum occurrence
            // Initialize a variable maxCount to 0 to keep track of the maximum count.
            let maxCount = 0;
            // Looping through each key in the counts object.
            for (const key in counts) {
            // If the count of the current key is greater than the current maxCount, update maxCount.
            if (counts[key] > maxCount) {
                maxCount = counts[key];
            }
            }   
            // Step 3: Identify the mode
            // Create an empty array called modes to store the mode.
            const modes = [];
            // Looping through each key in the counts object again.
            for (const key in counts) {
            // If the count of the current key is equal to the maxCount, it is a mode, so add it to the modes array.
            if (counts[key] === maxCount) {
                modes.push(key);
            }
            }      
            // Step 4: Handle Multiple Modes
            // Check if the number of modes is equal to the total number of unique elements in the array.
            if (modes.length === Object.keys(counts).length) {
            console.log("The array is multimodal.");
            } else {
            console.log("The mode is:", modes);
            }
            // return modes
            }
            // Method to calculate the range of a dataset
        calculateRange(arr) {
            const max = Math.max(...arr);
            const min = Math.min(...arr);
            return max - min;
            }
        
            // Method to calculate the variance of a dataset
        calculateVariance(arr) {
            // Calculate the mean of the dataset
            const mean = arr.reduce((sum, value) => sum + value, 0) / arr.length;
            
            // Calculate the squared deviations from the mean
            const squaredDeviations = arr.map(value => Math.pow(value - mean, 2));
    
            // Calculate the variance
            const variance = squaredDeviations.reduce((sum, value) => sum + value, 0) / arr.length;
            return variance;
            }
        
            // Method to calculate the standard deviation of a dataset
        calculateStandardDeviation(arr) {
                // Calculate the variance and return its square root
                const variance = this.calculateVariance(arr);
                return Math.sqrt(variance);
            }
        
            // Method to calculate the mean absolute deviation of a dataset
        calculateMeanDeviation(arr) {
                // Calculate the mean of the dataset
                const mean = arr.reduce((sum, value) => sum + value, 0) / arr.length;
        
                // Calculate the absolute deviations from the mean
                const absoluteDeviations = arr.map(value => Math.abs(value - mean));
        
                // Calculate the mean absolute deviation
                const mad = absoluteDeviations.reduce((sum, value) => sum + value, 0) / arr.length;
                return mad;
            }
        
            // Method to calculate the interquartile range of a dataset
        calculateInterquartileRange(arr) {
                // Sort the data in ascending order
                const sortedData = arr.slice().sort((a, b) => a - b);
        
                // Calculate the first quartile (Q1) and third quartile (Q3)
                const q1 = this.calculatePercentile(sortedData, 0.25);
                const q3 = this.calculatePercentile(sortedData, 0.75);
        
                // Calculate the interquartile range (IQR)
                const iqr = q3 - q1;
                return iqr/2
            }
        calculatePercentile(sortedData, percentile) {
                const index = Math.ceil(percentile * (sortedData.length + 1)) - 1;
                return sortedData[index];
              }
        }    
        return measuresOfCentralTendency;           
}

exampleArray = [1, 4, 6, 1, 8, 15, 18, 1, 5, 1]

const example = task2()

//Example for mean
const mean = new example
console.log(mean.calculateMean(exampleArray));

//Example for median
const median = new example
console.log(median.calculateMedian(exampleArray))

//Example for mode
const mode = new example
mode.calculateMode(exampleArray)

//example for ii
range = new example
variance = new example
standardDeviation = new example
meanAbsoluteDeviation = new example
InterquartileRange = new example

console.log('Range:', range.calculateRange(exampleArray))
console.log('Variance:', variance.calculateVariance(exampleArray));
console.log('Standard Deviation:', standardDeviation.calculateStandardDeviation(exampleArray));
console.log('Mean Absolute Deviation:', meanAbsoluteDeviation.calculateMeanDeviation(exampleArray))
console.log('Interquartile Range:', InterquartileRange.calculateInterquartileRange(exampleArray));
