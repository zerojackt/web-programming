function cat(name) {

    var catName = name || "cash" ;
    var result = catEat(catName);
    debugger;
    return result;
   
}


function catEat(name) {
    console.log(name+" eats fish.")

}

cat("herry");
cat();