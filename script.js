const radioButtons = document.querySelectorAll(".radio-container")
const coloredCircles = document.querySelectorAll(".color")
const selectionCheckbox = document.querySelector(".type-container")
const selectContainer = document.getElementById("selection")
const themeContainer = document.querySelectorAll(".theme-container")
const modeInput = document.getElementById("screenMode")
const modeCircle = document.getElementById("circle")
const requiredInputContainer = document.querySelectorAll(".required")
const requiredInput = document.querySelectorAll(".requiredInput")
const submitButton = document.querySelector(".button")
const agreementCheck = document.getElementById("privacy")
const body = document.querySelector("body")
const form = document.querySelector("form")
const screenMode = document.getElementById("screenMode")

screenMode.addEventListener("change", ()=>{
    if(screenMode.checked){
        body.style.backgroundColor = "#F9F9F9"
        form.style.backgroundColor = "#363B40"
    }else{
        body.style.backgroundColor = "#131516"
        form.style.backgroundColor = "#212427"
    }
})

submitButton.addEventListener("click", () => {
    let allFilled = true

    requiredInput.forEach((input, index) => {
        if (input.value === "" || !agreementCheck.checked) {
            allFilled = false
            if (!requiredInputContainer[index].classList.contains("alert")) {
                requiredInputContainer[index].classList.add("alert")
            }
        } else {
            if(requiredInputContainer[index].classList.contains("alert")){
                requiredInputContainer[index].classList.remove("alert")
            } 
        }
    })

    if (allFilled) {
        location.reload()
    }
})


modeInput.addEventListener("change", ()=>{
    if(modeCircle.classList.contains("animateMode")){
        modeCircle.classList.remove("animateMode")
        modeCircle.classList.add("animateModeBackwards")
    }else{
        modeCircle.classList.remove("animateModeBackwards")
        modeCircle.classList.add("animateMode")
    }
    
})

selectionCheckbox.addEventListener("change", ()=>{
    if(selectContainer.classList.contains("animateForwards")){
        selectContainer.classList.remove("animateForwards")
        selectContainer.classList.add("animateBackwards")
    }else{
        selectContainer.classList.remove("animateBackwards")
        selectContainer.classList.add("animateForwards")
    }
    
})

radioButtons.forEach(btn => {
    btn.addEventListener("change", () => {
        coloredCircles.forEach(circle => {
            if(circle.classList.contains("outline"))
            circle.classList.remove("outline")
        })

        const coloredCircle = btn.querySelector(".color")
        coloredCircle.classList.toggle("outline")
    })
})

themeContainer.forEach(container => {
    container.addEventListener("change", ()=>{
       themeContainer.forEach(container => {
        if(container.classList.contains("outline"))
            container.classList.remove("outline")
       })

       container.classList.toggle("outline")
    })
})