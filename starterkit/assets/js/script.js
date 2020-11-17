const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault() //evita o refresh com o envio do form
    const age = getNumber('age')
    const weight = getNumber('weight')
    const height = getNumber('height')
    
    const gender = getSelectedCase('gender')
    const activityLevel = getSelectedCase('activity_level')

    console.log(age, weight, height, gender, activityLevel)
})

function getNumber(id) {
    return Number(document.getElementById(id).value)
}

function getSelectedCase(id) {
    const select = document.getElementById(id)
    return select.options[select.selectedIndex].value
}

