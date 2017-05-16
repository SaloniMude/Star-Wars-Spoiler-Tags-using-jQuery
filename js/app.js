// prevent spoilerphobes from seeing spoilers

  

//Solution: Hide spoilers and reveal them through user interaction.

//1. Hide spoiler
$(".spoiler span").hide(); 
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3. When button is pressed
$(".spoiler button").click(function() {
    // 3.1 Show the spoiler next to the button clicked 
    $(this).prev().show(); // shows the span ie spoiler since it's previous sibling of button
    //3.2 Get rid of button
    $(this).remove();

  
});

