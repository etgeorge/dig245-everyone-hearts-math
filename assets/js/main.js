
/* javascript */
// $("h1").hide();

$(".answer").hide();

let yourMilk = "";

$("form").submit(function (e) {
    e.preventDefault();

});


$("#first").submit(function () {
    console.log("Submitted");
})
$(".check").click(function () {
    $("#first").submit();
    let you = $("#yourMilk").val();
    let friend = $("#friend").val();
    let value = you * friend;

    $("#response").text(`${you} x ${friend} = ${value} carton(s)`);

    let notValid = you.length === 0 || friend.length === 0 || you<0 || you>1 || friend<0 || friend >10

    if(you<0 || you>1 || you.length===0){
        alert("Please make first field less than 1 and greater than 0")
    }
    if (!notValid) {
        $(".answer").show();
    } else{
        $(".answer").hide();

    }
})


