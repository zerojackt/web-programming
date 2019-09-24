// window.setTimeout()

function hello() {

    console.log("hello() method start")
    
    setTimeout( function() {
        var message = "Hello World";
        console.log(message);
        

    } , 1);

    setInterval( function() {
        var meg = "setInterval run";
        console.log(meg);
    })

    console.log("hello() method end")

   
}

console.log("start")
hello(); 
console.log("end");

