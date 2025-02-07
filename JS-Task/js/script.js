var list = document.querySelectorAll(".list li")
var ul = document.getElementById("ul")
var card = document.querySelectorAll(".list li .card")
var demo = document.getElementById("demo")
var btn = document.getElementById("cart")
var show = document.getElementById("price")
var trash = document.getElementById("trash")
var contain = document.getElementById("contain")
var cart1 = document.getElementById("cart1")
var count = 0
var selected = document.querySelector(".container .collap span")
var totalprice = 0
list.forEach(function (item) {
    item.onclick = function () {
        totalprice += +(item.getAttribute("price"))
        if (demo.innerHTML != "") {
            btn.style.display = "block"
        }
        count++
        console.log(count)
        selected.innerHTML = count
    }
})
card.forEach(function (item) {
    item.onclick = function () {
        demo.innerHTML += item.textContent + "+<hr>"
        item.style.opacity = "0.5"
        demo.style.outline = "5px solid #6c757d"
        demo.style.padding = "5px"
        ul.style.width = "70%"
        contain.style.display = "block"
    }
})
btn.onclick = function () {
    console.log(totalprice)
    price.innerHTML = totalprice + "LE"
    price.style.outline = "5px solid rgba(220, 53, 70, 0.5)"
}
trash.onclick = function () {
    price.style.outline = "0px solid rgba(220, 53, 70, 0.5)"
    price.innerHTML = ""
    demo.innerHTML = ""
    btn.style.display = "none"
    demo.style.outline = "0px solid #6c757d"
    demo.style.padding = "0px"
    contain.style.display = "none"
    totalprice = 0
    ul.style.width = "100%"
    card.forEach(function (item) {
        item.style.opacity = "1"
    })
    count = 0
}
