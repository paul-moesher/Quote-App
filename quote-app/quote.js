$(document).ready(function(){
		var quoteArray = [
		{quote:"Nevermore.", author:"Edgar Allan Poe"}, {quote:"Only one thing matters, it's not how hard you worked or how long you worked but what you accomplished.", author:"Henry Ford"},{quote:"CLEVELAND!!!! THIS IS FOR YOU!", author:"The King"},{ quote:"A man who dares to waste one hour of time has not discovered the value of life.", author:"Charles Darwin"},{ quote:"In today's ever changing world, the most important investment you can make is an ongoing education in searching for new ideas.", author:"Rich dad"},{ quote:"As a species the greatest gift is not our bodies we are not the fastest, we are not the strongest, in the animal kingdom the body hardly distinguishes itself. Our greatest gift in life is our mind. Do not take your mind for granted, go places you never even dreamed of simply because you have power of mind.", author:"Neil Degrasse Tyson"},{quote:"Those who do not risk failing with ultimately fail.", author:"Napoleon Hill"},{quote:"There are three kinds of people, those who make things happen, those who watch things happen, and those who says what happened.", author:"Rich Dad"},{quote:"Thinking is the hardest work there is that's why so few engage in it.",author:"Henry Ford"}, {quote:"Men must be intelligent enough to realize the importance of human life and refuse to act like ordinary animals.", author:"Neil Degrasse Tyson"}
	];
    function quoteGenerator() {
      var randomQuote = Math.floor(Math.random()*quoteArray.length);
        var theQuote = quoteArray[randomQuote].quote;
        var theAuthor = quoteArray[randomQuote].author;
        $("#quote").text(theQuote).hide().fadeIn(1000);
        $("#author").text(theAuthor).hide().fadeIn(1000);
    }
 $("#btn").on("click", function() {
     quoteGenerator();
 });           });