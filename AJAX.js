var oreq = new XMLHttpRequest();

oreq.addEventListener("load", function() {
        console.log(this.responseText);
});

oreq.open("GET", "json.txt")
oreq.send();
