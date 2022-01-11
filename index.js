
const crypto = require('crypto')

// set your seed
let seed = "discord link will go here!!"
let range = {
  'low': 1, // set lowest number to detect
  'high': 111, // set highest number to detect
}

let invalid = [
]

let totalWinners = 13
let winnersPicked = 0

let winnerList = [
  "Animeta #2433",
  "Animeta #4683",
  "Animeta #559",
  "Newly minted Moglet 1",
  "Newly minted Moglet 2",
  "Newly minted Moglet 3",
  "Newly minted Moglet 4",
  "Newly minted Moglet 5",
  "Newly minted Moglet 6",
  "Newly minted Moglet 7",
  "Newly minted Moglet 8",
  "Newly minted Moglet 9",
  "Newly minted Moglet 10",
]

let winnerAnnouncement = ""

console.log("starting seed string = " + seed)

determineWinningNumber(seed) // run it!

function determineWinningNumber(_seed){
  let shasum2 = crypto.createHash('sha256')
  let hash = shasum2.update(_seed).digest('hex')
  // console.log("hash256 = " + hash)
  let hashStripped = hash.replace(/\D/g,'')
  // console.log("hashStripped = " + hashStripped)
  let numOfSubstrings = Math.trunc(hashStripped.length / range.high.toString().length)
  // console.log("numOfSubstrings = " + numOfSubstrings)
  for (var i = 0; i < numOfSubstrings; i++) {
    let offset = i * 3
    let substring = hashStripped.substring(0 + offset, 3 + offset)
    let number = parseInt(substring)
    if(number >= range.low && number <= range.high && !invalid.includes(number)){
      winnerAnnouncement += winnerList[winnersPicked] + " goes to raffle #" + number + "!\n"
      winnersPicked++
      invalid.push(number)
      if(winnersPicked >= totalWinners){
        console.log("")
        console.log("|||| MOGLET GRAND PRIZE RAFFLE!! |||")
        console.log("|||| MOGLET GRAND PRIZE RAFFLE!! |||")
        console.log("|||| MOGLET GRAND PRIZE RAFFLE!! |||")
        console.log("")
        let countdown = 3
        sleep(1000).then(() => {
          console.log(countdown--)
        });
        sleep(3000).then(() => {
          console.log(countdown--)
        });
        sleep(5000).then(() => {
          console.log(countdown--)
        });
        sleep(7000).then(() => {
          console.log("")
          console.log(winnerAnnouncement)
        });
        return
      }
    }
  }
  determineWinningNumber(hash)
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
