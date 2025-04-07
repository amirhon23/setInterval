let pause = document.querySelector("#pause");
let set = document.querySelector("#set");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let interval

function setPause() {
   
   interval = setInterval(() => {
        seconds.textContent--
    
        if (seconds.textContent < 0) {
            seconds.textContent = "59"
            minutes.textContent--
        }
        if (seconds.textContent < 10) {
            seconds.textContent = "0" + seconds.textContent--
        }
        if (minutes.textContent < 10) {
            minutes.textContent = "0" + minutes.textContent--
        }
        if (minutes.textContent <= 0 && seconds.textContent <= 0) {
            clearInterval(interval)
        }
    }, 300)
}

pause.onclick = () => {
    setPause()
}
set.onclick = () => {
    
    
    clearInterval(interval)


    if (set.textContent == "Пауза") {
        set.textContent = "Продолжить";
        
    } else {
        set.textContent  = "Пауза";
        
    }
}
