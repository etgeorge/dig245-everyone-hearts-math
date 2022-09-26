
/* javascript */
// $("h1").hide();

$("#answer").hide();

let yourMilk = "";

$("form").submit(function(e) {
  e.preventDefault();
  yourMilk = ("#yourMilk").val;

  console.log(yourMilk);
});

$(".check").click(function (){
    $("#first").submit();
    let you = $("#yourMilk").val();
    let friend = $("#friend").val();
    let value = you*friend;
    
    $("#answer").text(`${you} x ${friend} = ${value} cartons`);
    $("#answer").show();
})

$("#first").submit(function (){
    console.log("form submitted");
})
