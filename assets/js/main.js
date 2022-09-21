
/* javascript */
// $("h1").hide();

let username = ""
let requiredUsername = "secret"

$(".submit").click(function (e) {
    e.preventDefault();
    username = $(".username").val();
    console.log(username + " is username");

    let str = ""
    if (username == requiredUsername) {
        console.log("Success!");
        str = `
        <div class="alert alert-success" role="alert">
            Welcome, compatriot ${username}
        </div>
        `
    } else{
        str=`
        <div class="alert alert-danger" role="alert">
            Invalid username. Try again?
        </div>
        `
    }

    $(".output").html(str);

});