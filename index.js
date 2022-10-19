var counter = 1

setInterval(function() {
    const radioBtn = document.getElementById("radio" + counter)
    radioBtn.checked = true
    counter++
    if(counter > 4){
        counter = 1
    }
},4000)