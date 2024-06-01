function AddElementOnDisplay(element) {
    let displayText = document.getElementsByClassName("display__text")[0].textContent
    if (displayText.length < 11) {
        let newText = displayText + element
        document.getElementsByClassName("display__text")[0].textContent = newText
    }
}

function DeleteLastElementOnDisplay() {
    let displayText = document.getElementsByClassName("display__text")[0].textContent
    console.log(displayText == NaN)
    if (displayText == NaN || displayText == "null error" || displayText == "symbol error") {
        document.getElementsByClassName("display__text")[0].textContent = ""
    }
    else {
        let newText = displayText.slice(0, displayText.length-1)
        document.getElementsByClassName("display__text")[0].textContent = newText
    }
}


function GetResult() {
    let text = document.getElementsByClassName("display__text")[0].textContent
    let displayElements = text.split(" ")
    let resultText = []
    for (let symbol = 0; symbol < displayElements.length; symbol++) {
        if (displayElements[symbol + 1] == "*" || displayElements[symbol + 1] == "/") {
            if (displayElements[symbol + 1] == "*") {
                resultText.push(Number(displayElements[symbol]) * Number(displayElements[symbol + 2]))
            }
            else {
                if (Number(displayElements[symbol + 2]) == 0) {
                    document.getElementsByClassName("display__text")[0].textContent = "null error"
                    return null
                }
                resultText.push((Number(displayElements[symbol]) / Number(displayElements[symbol + 2])).toFixed(2))
            }
            symbol = symbol + 3
        }
        if (displayElements[symbol]) {
            resultText.push(displayElements[symbol])
        }
    }
    let operations = ["+", "-", "*", "/", "."]
    if (operations.includes(resultText[0]) ||
        operations.includes(resultText[resultText.length-1])) {
        document.getElementsByClassName("display__text")[0].textContent = "symbol error"
        return null
        }
    console.log(resultText)
    let result = Number(resultText[0])
    for (let symbol = 1; symbol < resultText.length; symbol++){
        if (resultText[symbol] == "+") {
            result = result + Number(resultText[symbol + 1])
            symbol++
        }
        else if (resultText[symbol] == "-") {
            result = result - Number(resultText[symbol + 1])
            symbol++
        }
    }

    document.getElementsByClassName("display__text")[0].textContent = result
}

function CheckVoid() {
    let text = document.getElementsByClassName("display__text")[0].textContent
    if (text == "") {
        document.getElementsByClassName("display__text1")[0].textContent = "0"
    }
    else {
        document.getElementsByClassName("display__text1")[0].textContent = ""
    }
}

setInterval(CheckVoid, 10)