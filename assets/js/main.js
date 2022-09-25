
/* javascript */
// $("h1").hide();

let yourMilk = "";

$("form").submit(function(e) {
  e.preventDefault();
  yourMilk = ("#yourMilk").val;

  console.log(yourMilk);
});

$(".check").click(function (e){
  e.preventDefault();
    let friend = $("#friend").val();
    console.log(friend);
    
})