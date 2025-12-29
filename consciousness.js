console.dir(document)

const title = document.getElementById("title")
const conscious = document.getElementById("conscious")
const phrase = document.getElementById("phrase")
const randNum = document.getElementById("randNum")

const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const yesOrNo = () => {
  return Math.floor(Math.random() * 2)
}

const consciousness = [
  "critical",
  "crude",
  "self-ful",
  "open",
  "self-ful",
  "crude",
]

const generateConsciousness = () => {
  const generate = () => {
    // random letter
    const alea = getRndInt(1, 6)
    // const genLet = String.fromCharCode(randInt)
    const genConsc = consciousness[alea - 1]
    conscious.textContent = genConsc

    // random letter colour
    const colours = ["green", "blue", "#E7180B", "#FFD230", "#E7180B", "blue"]
    conscious.style.color = colours[alea - 1]

    const phrases = [
      "just do it",
      "first thought, best thought",
      "respect yourself",
      "anything is possible",
      "divine expression",
      "divine manifestation",
    ]

    // phrase
    phrase.textContent = phrases[alea - 1]

    // yes or no random colour
    phrase.style.color = colours[alea - 1]

    // random number
    randNum.textContent = alea
    // randNum.textContent = `${getRndInt(21, 499)} - ${getRndInt(1, 6)}`
    randNum.style.color = colours[alea - 1]
  }

  const timeout = (ms) => {
    // simply resolves when set time is over
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async function run() {
    if (title.style.color === "violet") {
      title.style.color = "tomato"
    }
    for (i = 0; i < 20; i++) {
      generate()
      // waits for setTimeout, resolves & goes back to  the loop
      await timeout(i * 20)
    }
  }

  run().then(() => (title.style.color = "violet"))
}
