var el = document.querySelector(".outside");

el.addEventListener("click", function (event) {
    var target = event.target;
    console.log(target.className, target.nodeName);
});

document.querySelector(".but").addEventListener("click", function(e) {
    document.querySelector(".click").innerHTML = "hi";
});