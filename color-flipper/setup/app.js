const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// formule anjam shoodane click
document.getElementById("btn").onclick = function () {
    //zarf hesam = sakht tasadofi aadad zarbdare length
     let hesam =  Math.floor(Math.random()*colors.length)
    document.getElementsByClassName("color")[0].innerHTML = colors[hesam]
    //gereftane file.badane.css.range safhe
    document.body.style.backgroundColor = colors[hesam]
    
}
