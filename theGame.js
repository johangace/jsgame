const readlineSync = require('readline-sync')

let currentGuess = 0;
const maxGuesses = 3;

//let randomNumber = Math.floor(Math.random() * maxRange + 1);
//console.log('Random number: ', randomNumber )

// Get user name
let userName = readlineSync.question("Hello, what's your name?\n");

let students = [ "Tushar", "Sophia", "Jessica", "Aaron",
"Mitch" , "Jaime", "Tim", "Jajuan", "Carl", "Micha", "Adlai",
"Wilson", "Gerson", "Gabriel", 
"Darci", "Raphael", "Edwin", "Nicole", "Josh",
"Sid", "Miguel", "Anthony",
"Matthew", "Johan", "Lia", "Christopher", "Mixolidia", "Yulia"];



//let randomLetter = students[Math.floor(Math.random() * students.length)].charAt(0);
//console.log("First Letter: " + randomletter )

let userGuess = readlineSync.question(`Hello ${userName}, I have chosen a random student from our class, you have ${maxGuesses} tries to guess their name.\n`)

const handleGuess = (userGuess) => { let randomStudent=  `${students[Math.floor(Math.random() * students.length)]}`

const firstLetter= randomStudent[0] 


  for(let guesses = 0; guesses < maxGuesses; guesses++){
    if (userGuess == randomStudent || userGuess == randomStudent.toLowerCase()) {
      console.log("You win. Share the victory with your friend! 🏆")
      guesses = maxGuesses;
      break;
    } else if (guesses == maxGuesses - 1) {
      console.log('You lose. As a penalty you have to buy ' + randomStudent + ' lunch. ☠️')   
    } else if (userName == randomStudent || userName == randomStudent.toLowerCase()) {
      console.log('Wow, dear'+ userName + 'you are in luck, I actually guessed your name. You already Won, No need to go further. Congrats. :) ') 
    }else if ((userGuess !== randomStudent ||userGuess !== randomStudent.toLowerCase())  &&  guesses == 0){
      thinkAgain();
      userGuess = readlineSync.question('Let me give you a hint. Their name starts with '+ firstLetter + '\n')
    } else {
      lastChance()
      userGuess = readlineSync.question(' Your Last Chance...\n')
    }
  }
}

const thinkAgain = () => {
  console.log('Think again.')
  currentGuess++
  console.log("Guesses left: ", maxGuesses - currentGuess)
}
const lastChance = () => {
  console.log('Not Quite, think again')
  currentGuess++
  console.log("Guesses left: ", maxGuesses - currentGuess)
}

handleGuess(userGuess)
