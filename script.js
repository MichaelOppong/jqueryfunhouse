// JavaScript File
$( document ).ready(function() {

$("#garage-door-opener").click(function() {
    $("#garage-door").slideToggle();
});

$("#transporter-controls").click(function() {
    $("#away-team").fadeIn();
});

$("#light-switch").click(function() {
    $("#light-bulb").toggle();
});
});
