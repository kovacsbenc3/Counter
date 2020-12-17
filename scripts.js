
let counter = 0;

$("#increase").click(()=>{
    counter ++
    $("#counter").text(counter);
});


$("#decrease").click(()=>{
    counter = counter -1 ;
    $("#counter").text(counter);
});