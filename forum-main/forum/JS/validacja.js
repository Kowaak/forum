function validacja_log(){
    var x = document.forms["log"]["passlog"].value;
    var y = document.forms["log"]["nicklog"].value;
    if (x  == "" || y == ""){
        alert("Musisz wypełnić wszystkie pola");
    }
}
function validacja_rej(){
    var x = document.forms["rej"]["passrej"].value;
    var y = document.forms["rej"]["emailrej"].value;
    var z = document.forms["rej"]["nickrej"].value;
    if (x  == "" || y == "" || z == ""){
        alert("Musisz wypełnić wszystkie pola");
    }

}