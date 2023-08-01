const firstName = prompt("Wright your name")
const partnerName = prompt("Wright your partner name")

const randomNum = Math.floor(Math.random() * 100)

alert(`Your love score is ${firstName} and ${partnerName} is ${randomNum} `)

if (randomNum < 33 && firstName !== null && partnerName !== null && firstName !== "" && partnerName !== "") {
  alert(`Your love score is ${firstName} and ${partnerName} is ${randomNum} you need find another partner`)
} else if (randomNum >= 33 && randomNum < 66 && firstName !== null && partnerName !== null && firstName !== "" && partnerName !== "") {
  alert(`Your love score is ${firstName} and ${partnerName} is ${randomNum} you need to work on your relationship`)
} else if (randomNum >= 66 && firstName !== null && partnerName !== null && firstName !== "" && partnerName !== "") {
  alert(`Your love score is ${firstName} and ${partnerName} is ${randomNum} you are perfect together`)
} else {
  alert("Something went wrong")
}


