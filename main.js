function checkOrder() {
    var inputorder = document.getElementById('orderinput').value;

    switch (inputorder) {
        case "B":
            document.getElementById('result').innerHTML = "One burger coming up! 🍔";
            break;
        case "F":
            document.getElementById('result').innerHTML = "One order of fries coming up! 🍟";
            break;
        case "S":
            document.getElementById('result').innerHTML = "One soda coming up! 🥤";
            break;
        default:
            document.getElementById('result').innerHTML = "Order is not in the menu.";
    }
}


    document.getElementById("orderinput").oninput = function () {
    changeToCapital();
}
    function changeToCapital() {
    var inputorder = document.getElementById("orderinput");
    inputorder.value = inputorder.value.toUpperCase();
}
