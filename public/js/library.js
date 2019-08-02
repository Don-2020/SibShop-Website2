
function getCategories() {
    console.log("Inside function");
    var dropdown = document.getElementById("categoryMenu"); 
    var selectedOptionValue = dropdown.options[dropdown.selectedIndex].value;

    document.location.href = `/library/${selectedOptionValue}`;
   
}

$(document).ready(function(){
   
    $("#category-submit").on("click", function(){
        console.log("Inside click event")
        event.preventDefault();
        getCategories();
    })

})

