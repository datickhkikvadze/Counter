var Increase = document.getElementById("inc")
var Decrease = document.getElementById("dec")
var Reset = document.getElementById("res")
var valueOfCount = document.getElementById("valueOfCount")
var RealNum = 0
Increase.addEventListener("click",function(){
    RealNum++
    valueOfCount.textContent = RealNum
})

Decrease.addEventListener("click",function(){
    RealNum--
    valueOfCount.textContent = RealNum
})

Reset.addEventListener("click",function(){
    RealNum = 0
    valueOfCount.textContent = RealNum
})