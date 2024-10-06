//two types of promises 
// pending and resolved


var d = new Promise(function(resolve){
    setTimeout( function(){
        resolve("foo");
    })
});
function callback(){
    console.log(d);                     // promise says foo inside 
}



// now logging outside
console.log(d);                     // put set time out for logging outside



d.then(callback); 