const coinArray = ["Tails", "Heads"]
const message = document.querySelector('.message')
const buttons = document.querySelectorAll('button')
let score = [0, 0]
for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener('click', tossCoin)
}
function tossCoin(e) {
    let playerGuess = e.target.innerText
    let computerToss = Math.floor(Math.random() * 2)
    let computerGuess = coinArray[computerToss]
    message.innerHTML = " computer selected :" + computerGuess + "<br\>"
    let output
    if (playerGuess === computerGuess) {
        output = " Player Win. "
        score[0]++
    }
    else {
        output = " Computer win. "
        score[1]++
    }
    message.innerHTML += output + " <br\> player : " + score[0] + " <br\> " + "Computer : " + score[1]
    if (score[0] === 20 || score[1] === 20) {
        alert("Finish")
        if (score[0] > score[1]) {
            alert("players win")
        }
        else {
            alert("computer win")
        }
        if (score[0] > score[1] || score[0] < score[1]) {
            score[0] = null
            score[1] = null
        }
    }
}
