function printName(firstname) {
    var secondname = "alice";
    console.log(printName("terri"));

}

function printName2(name) {

    var inner = function() {
        return "inner value";

    }

    var result = inner();
    console.log("my name is "+result);
}

printName2();

function a() {

}

console.log(a());