const readline = require("node:readline")

const { stdin: input, stdout: output } = require("node:process")

const rl = readline.createInterface({ input, output })

const workDuration = 25 * 60
const smallBreakDuration = 5 * 60
const longBreakDuration = 20 * 60
let pomodoro = 4

function startTimer(type, duration) {
  console.log(`${type} timer started`)

  setTimeout(() => {
    console.log(`${type} timer finished`)
    if (type === "work") {
      if (pomodoro === 1) {
        pomodoro = 4
        startTimer("break", longBreakDuration)
      } else {
        startTimer("break", smallBreakDuration)
      }
    } else if (type === "break") {
      pomodoro--
      startTimer("work", workDuration)
    }
  }, duration * 1000)
}

rl.question("Press Y to start timer ", (answer) => {
  if (answer === "Y" || answer === "y") {
    startTimer("work", workDuration)
  } else {
    console.log("Bye")
    rl.close()
  }
})
