

$(document).ready(function () {

    var allParagraphs = $("p");
    var textButton = $("#textButton");

    // $("p").css();

    textButton.click( function () {

        var color = randomColorGenerator();
        console.log(color);

        $("#someDiv").append("<p>" + color + "</p>");

        allParagraphs.css("font-size", random255() + "px");
        allParagraphs.css("color", color);

    } );

    $("#emptyButton").click( function () {

        $("#someDiv").empty();
        //$("#someDiv p:last-child").remove();

    } );

    

});


function randomColorGenerator() {
    // rgb(177,177,177)
    // rgb(  and )

    var firstPart = "rgb(";
    var lastPart = ")";

    var completeRGB = firstPart + random255() + "," + random255() + "," + random255() + lastPart;

    return completeRGB;
}


function random255() {
    var randomNumber = Math.floor(Math.random() * 256);
    return randomNumber;
}