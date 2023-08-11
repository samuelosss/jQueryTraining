// alert("Works");

// use if placing script calls in HEAD section, but just don't do it
//$(document).ready(function () {
// 	$("h1").css("color", "red");
// });

//ask for a property value
// $("h1").css("color");

//change style - but don't because of separation of concerns HTML, CSS, JS
// $("h1").css("color", "red");

//add / remove class
// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");

//add more classes
// $("h1").addClass("big-title margin-50");

//manipulating text
$("h1").text("Bye");
//changing all the elements matching! - all buttons
// $("button").text("HeyBoy");

//change HTML
// $("button").html("<em>Head's Up</em>");

//but check this - will interpret everything between quotations as text
// $("button").text("<em>Head's Up</em>");

//manipulate attributes
//add some elemts in thml and change their attributes
// $("img").attr("heigth", "150px");

// $("a").attr("href", "https://yahoo.com");
// $("a").text("Changed to Yahoo!");

//let's play with event listeners
// $("h1").click(function () {
// 	$("h1").text("Clicked!");
// });

//compare how to do without jQ
//buttons click changing background color to red
// for (var i = 0; i < document.querySelectorAll("button").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.backgroundColor = "red";
//     })
// }
//compare to jQ
// $("button").click(function () {
// 	$("h1").css("background-color", "red");
// });

//adding input (HTML) and logging keystrokes
// $("input").keypress(function (event) {
// 	console.log(event.key);
// });

//ANGELA's challenge 'pressing key inside a website, change h1 to the respective key name'
// $(document).keypress(function (event) {
// 	$("h1").text(event.key);
// });

//even further with "on" method - then any Event according DOM Events documentation
// $(document).on("mouseover", function(){
//     $("h1").css("color", "purple");
// });
// $(document).on("mouseout", function () {
// 	$("h1").css("color", "yellow");
// });

//before, after, prepend, append, remove
// $("h1").on("mouseover", function () {
// 	$("h1").prepend("Prepended text");
// });
// $("button").on("click", function () {
// 	$("button").remove();
// });

//hide elements method
// $("button").on("click", function () {
// 	$("h1").toggle();
// });
//or .show()
//.toggle() hides/shows on each occurence

//.fadeOut(milisec), .fadeToggle(), slideUp(),
// $("img").on("mouseover", function () {
// 	$("img").fadeOut(3000);
// });
// $("button").on("click", function () {
// 	$("h1").show();
// });
// $("img").on("mouseover", function () {
// 	$("h1").slideUp(650);
// });

//method .animate({css: rules}) animates to the value.. make sure the second value is a NUMBER!
// $("img").on("mouseover", function () {
// 	$("img").animate({ opacity: 0.15 });
// });

//U can chain them together :o !!!
$("img").on("mouseover", function () {
	$("img").slideUp(700).slideDown(3000).animate(1500, { opacity: 0.15 });
});
