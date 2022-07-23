const start = document.getElementById("button-start")
const stop = document.getElementById("button-stop")
const reset = document.getElementById("button-reset")
const seconds = document.getElementById("seconds")
const tens = document.getElementById("tens")
let hesam = 00
let amir = 00
let gholam


start.onclick = function(){
    clearInterval(gholam)
    gholam = setInterval(() => {timeStart()}, 100);
}
stop.onclick = function(){ 
    clearInterval(gholam)
     
}
reset.onclick = function(){
    clearInterval(gholam)
    amir = 00
    hesam = 00
    seconds.innerHTML = amir + "0"
    tens.innerHTML = hesam  + "0"
}
function timeStart(){
    hesam++
        // ezafe kardan 0    
    if(hesam < 10){
        tens.innerHTML="0" + hesam
    }
    // pak kardan 0
    else if(hesam >= 10){
        tens.innerHTML = hesam
    }
    if(hesam > 99){
        hesam = 0
        amir++
        // ezafe kardan 0
        if(amir < 10){
        seconds.innerHTML="0" + amir
    }
    // pak kardan 0
    else if(amir >= 10){
        seconds.innerHTML = amir
    }
    }

}



