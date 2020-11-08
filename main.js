let cars = ["Ford", "Saab", "Chevy", "Toyota"]


let moreCars = ["Volvo", "Volkswagen", "Hyundai", "Honda"]

let totalCars = cars.concat(moreCars)

console.log(totalCars)

console.log("Index of Honda is " + totalCars.indexOf("Honda") + " " + "Index of Ford is " + totalCars.lastIndexOf("Ford"))

stringOfCars = totalCars.join()
console.log(stringOfCars)

totalCars = stringOfCars.split(",")
console.log(totalCars)

let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

carsInReverse.sort()

console.log(carsInReverse)
console.log(carsInReverse.indexOf('Chevy'));

let removedCars = carsInReverse.slice(carsInReverse.indexOf("Ford"), 3)

console.log(removedCars)

carsInReverse.splice(1, 1, removedCars[0])
carsInReverse.splice(2, 1, removedCars[1])
console.log(carsInReverse)

carsInReverse.push(removedCars[0])
carsInReverse.push(removedCars[1])
console.log(carsInReverse)
console.log(carsInReverse[carsInReverse.length - 1])
let lastCar = carsInReverse.pop(carsInReverse[carsInReverse.length - 1])
console.log(lastCar)

let firstCar = carsInReverse.shift()
console.log(firstCar)
carsInReverse.unshift("GMC")
console.log(carsInReverse)

let numbers = [23, 45, 0, 2]
numbers.forEach(x => {
    x = x + 2
    numbers[x] = x
})
console.log(numbers)

const addTwo = (x) => {
    x += 2
}

numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

numbers.forEach(x => {
   numbers[x] = addTwo(numbers[x])
})
console.log(numbers)

