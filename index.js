// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in
let number = 16

// Prompt the user to guess the number
let userguess = prompt("Please guess a number.")

// Cast the user input to a number
let userguess2 = prompt("Please guess a number.")
userguess2 = parseInt(userguess2)
// Create a new variable called attempts and set it to 0
let attempts = 0 

// Create a while loop that runs while the user guess is not equal to your number
while(number==userguess)
console.log("you got it!")
while(number!==userguess)
console.log("your wrong!")


// In the while loop, prompt the user to guess the number again (remember to cast)
    userguess2 =prompt("guess again ")
userguess2 = parseInt(userguess2)

// In the while loop, increase the attempts by 1
attempts ++

// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"




// After the while loop, print "It took (attempts) attempts" 
console.log("it took, attempts", attempts)
