const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];   
// formule anjam shoodane click
document.getElementById("btn").onclick = function () {
    //zarf hesam = sakht tasadofi aadad zarbdare length
     let amir = "#"
     for(let i=0; i<6; i++ ){
    amir += hex[hesam()]
     }
     //
    document.getElementsByClassName("color")[0].innerHTML = amir
    //gereftane file.badane.css.range safhe
    document.body.style.backgroundColor = amir    
}
function hesam(){
    return Math.floor(Math.random()*hex.length)
}
