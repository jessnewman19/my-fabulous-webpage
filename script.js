document.querySelector('#link > a').id = "linkedIn";

let hover = document.getElementById("linkedIn");
hover.addEventListener("mouseenter", function(event) { 
    event.target.style.color = "purple";
    setTimeout(function() { 
        event.target.style.color = "";
    }, 500);
    }, false);

