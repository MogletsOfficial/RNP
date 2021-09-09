
const crypto = require('crypto')

// set your seed
let seed = "you can stick whatever string you'd like in here!"
let range = {
  'low': 500, // set lowest number to detect
  'high': 999, // set highest number to detect
}

let invalid = [
  // invalid numbers due to giveaway reserves or promo handouts
  763, 483, 503, 527, 531, 529, 929, 510, 530
]

console.log("starting seed string = " + seed)

let winningNumber = determineWinningNumber(seed) // run it!

function determineWinningNumber(_seed){
  let shasum2 = crypto.createHash('sha256')
  let hash = shasum2.update(_seed).digest('hex')
  console.log("hash = " + hash)
  let hashStripped = hash.replace(/\D/g,'')
  console.log("hashStripped = " + hashStripped)
  let numOfSubstrings = Math.trunc(hashStripped.length / range.high.toString().length)
  console.log("numOfSubstrings = " + numOfSubstrings)
  for (var i = 0; i < numOfSubstrings; i++) {
    let offset = i * 3
    let substring = hashStripped.substring(0 + offset, 3 + offset)
    let number = parseInt(substring)
    console.log("number = " + number)
    if(number >= range.low && number <= range.high && !invalid.includes(number)){
      return number
    }
  }
  console.log("No winning number found. Rehashing!")
  determineWinningNumber(hash)
}

console.log("Winning number is: " + winningNumber)
