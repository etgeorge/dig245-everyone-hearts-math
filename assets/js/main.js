
/* javascript */
// $("h1").hide();

let yourMilk = "";

$("form").submit(function(e) {
  e.preventDefault();
  yourMilk = ("#yourMilk").val;

  console.log(yourMilk);
});

$(".check").click(function (e){
  
    let you = $("#yourMilk").val();
    let friend = $("#friend").val();
    let value = you*friend;
    console.log(you);
    console.log(friend);
    $("#answer").text(`${you} x ${friend} = ${value} cartons`);
    
    
})