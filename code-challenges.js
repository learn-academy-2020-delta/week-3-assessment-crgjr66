// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const firstFib10 = () => {
  // crate an array to store the numbers
  let numArray = []
  // create a 10x loop
  for (i = 0; i < 10; i++) {
    // put then number 1 into the i+1 position
    if (i <= 1) {
      numArray[i] = 1
    } else {
      // otherwise sum the previous 2 numbers
      numArray[i] = numArray[i-1] + numArray[i-2]
    }
  }

  // when all 10 positions are filled, return the array
  return numArray
}

console.log(firstFib10())



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const sortedOdds = (array) => {
  //use a filter to traverse through the array
  // find the odd numbers first
  // finally sort low to high
  return array.filter(value => ((typeof value === 'number') && (value % 2 !== 0))).sort((a,b) => a-b)
}

console.log(sortedOdds(fullArr1))
console.log(sortedOdds(fullArr2))



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

const midLetter = (string) => {
  // local array to hold temp values
  let tempString = []
  // split the word in the middle using .slice()
  tempString = string.slice(Math.floor(string.length / 2) - 1)
  // determine how many chars to return, 1 for odd, 2 for even
  //console.log(tempString)
  if (string.length % 2 === 0) {
    // even
    return tempString.slice(0,2)
  } else {
    // odd
    return tempString.slice(1,2)
  }
}

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

console.log(midLetter(middleLetters1))
console.log(midLetter(middleLetters2))



// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
class Sphere {
  constructor() {
    this.area = 0
  }

  findArea(radius) {
    return this.area = 4 * 3.14 * radius**2
  }
}

// create diff size spheres from the Sphere class
var littleSphere = new Sphere()
var mediumSphere = new Sphere()
var largeSphere = new Sphere()

// find the area of those spheres
console.log("the area of the sphere is ", `${littleSphere.findArea(4).toFixed(2)}`, " Square units")
console.log("the area of the sphere is ", `${mediumSphere.findArea(10).toFixed(2)}`, " Square units")
console.log("the area of the sphere is ", `${largeSphere.findArea(23).toFixed(2)}`, " Square units")



// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const sumEmAll = (array) => {
  // go thru all the elements of the array and replace each index
  // with the total sum to that point
  // first eliminate NULL/empty arrays

  //need a new array
  let newArray = [...Array(array.length).fill(0)]
  let j = 0

  if (array.length === 0) {
    return array
  }
  // if the array has elements then replace each index
  // with the total sum to that point
  array.map((val, index) => {
    // the first element is itself
    if (index === 0) {
      newArray[index] = array[index]
    } else {
      // need a new counter to count down, set to current location
      // within the array, and store in new array
      j = index
      while (j >= 0) {
        //console.log('old', array)
        //console.log('new', newArray)
        newArray[index] += array[j]
        j--
      }
    }
  })
  // // if the array has elements then replace each index
  // // with the total sum to that point
  // for (i = 0; i < array.length; i++) {
  //   //console.log('index = ', i)
  //   // the first element is itself
  //   if (i === 0) {
  //     newArray[i] = array[i]
  //   } else {
  //     // need a new counter to count down, set to current location
  //     // within the array, and store in new array
  //     j = i
  //     while (j >= 0) {
  //       //console.log('old', array)
  //       //console.log('new', newArray)
  //       newArray[i] += array[j]
  //       j--
  //     }
  //   }
  // }
  return newArray
}

console.log(sumEmAll(numbersToAdd1))
console.log(sumEmAll(numbersToAdd2))
console.log(sumEmAll(numbersToAdd3))
