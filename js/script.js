function guess() {
    var randomValue = parseInt(Math.random() * 11)
    var guess = parseInt(document.getElementById("inputValue").value)
    var result = document.getElementById("result")

    if(guess == randomValue){ 
        result.innerHTML = "Parabéns, você acertou!"
    } else if(guess <1 || guess >10) {
        result.innerHTML = "Por favor, digite apenas valores entre 1 e 10"
    } else {
        result.innerHTML = "Que pena, você errou! O número secreto era " + randomValue
    }
    console.log(randomValue)
}

