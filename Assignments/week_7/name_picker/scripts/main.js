$(document).ready(function () {

    $("#activate").click( function () {

        $("#activate").attr("disabled", "disabled");
        
        var namesSubmission = $("#contestants").val();

        var contestants = namesSubmission.split(",");

        console.log(contestants);

        var winner = Math.random() * contestants.length;

        var winnerIndex = Math.floor(winner);

        console.log(winnerIndex);

        var winnerName = contestants[winnerIndex];

        console.log(winnerName);

        $("#winnerBox").html("<p>" + winnerName + "</p>");

    } );

});