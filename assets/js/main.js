
/* javascript */
// $("h1").hide();

console.log("Figma designs: https://www.figma.com/file/sENgH2wmx3A22VeNKnFKfL/Everyone-Loves-Math?node-id=0%3A1");
$(".answer").hide();

// let yourMilk = "";

$("form").submit(function (e) {
    e.preventDefault();

});


$("#first").submit(function () {
    console.log("Submitted");
});
$(".check").click(function () {
    
    let you = $("#yourMilk").val();
    let friend = $("#friend").val();
    let value = you * friend;

    $("#response").text(`Your friend drank ${you} x ${friend} = ${value} carton(s) of milk.`);

    let notValid = you.length === 0 || friend.length === 0 || you<0 || you>1 || friend<0 || friend >10;

    if(you<0 || you>1 || you.length===0){
        alert("Please make first field less than 1 and greater than 0");
    }
    if (!notValid) {
        $(".answer").show();
    } else{
        $(".answer").hide();

    }
});
