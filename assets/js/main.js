
/* javascript */
// $("h1").hide();

let yourMilk = "";

$("form").leftSubmit(function(e) {
  e.preventDefault();
  yourMilk = ("#yourMilk").val();

  console.log(yourMilk);
});
