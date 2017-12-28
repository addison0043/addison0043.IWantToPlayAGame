var openingText = [ 
	"Hello. I want to play a game.<br>Here's what happens if you lose...",
	"The device you are wearing is hooked into your upper and lower jaw.<br>Think of it like a reverse bear trap.",
	"The only way to free yourself is to correctly answer<br>a series of questions about Javascript and JQuery.<br>You have ten seconds for each question.",
	"Live or die, make your choice.",
	""
];

var openingGif = [
	"File/play_game.gif",
	"File/trapped.gif",
	"File/trapped.gif",
	"File/static.gif",
	"File/good_luck.jpg"
]

var questions = [
	{
	  quest: "Inside which HTML element do we put the JavaScript?",
	  sel1: '<javascript>',
	  sel2:'<scripting>',
	  sel3: '<script>',
	  sel4:'<js>',
	  correctAnswer: '<script>'
	},
	{
	  quest: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
	  sel1: 'document.getElementByName("p").innerHTML = "Hello World!";',
	  sel2:'#demo.innerHTML = "Hello World!";',
	  sel3: 'document.getElement("p").innerHTML = "Hello World!";',
	  sel4:'document.getElementById("demo").innerHTML = "Hello World!";',
	  correctAnswer: 'document.getElementById("demo").innerHTML = "Hello World!";'
	},
	{
	  quest: "How do you create a function in JavaScript?",
	  sel1: 'function {}',
	  sel2: 'function myFunction()',
	  sel3: 'function = myFunction()',
	  sel4: 'function:myFunction()',
	  correctAnswer: 'function myFunction()'
	},
	{
	  quest: "How do you write an IF statement in JavaScript?",
	  sel1: 'if (i == 5)',
	  sel2: 'if i = 5 then',
	  sel3: 'if i = 5',
	  sel4: 'if i == 5 then',
	  correctAnswer: 'if (i == 5)'
	},
	{
	  quest: "How does a FOR loop start?",
	  sel1: 'for i = 1 to 5',
	  sel2: 'for (i = 0; i <= 5; i++)',
	  sel3: 'for (i = 0; i <= 5)',
	  sel4: "for (i <= 5; i++)",
	  correctAnswer: 'for (i = 0; i <= 5; i++)'
	},
	{
	  quest: "What is the correct way to write a JavaScript array?",
	  sel1: 'var colors = "red", "green", "blue"',
	  sel2: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
	  sel3: 'var colors = ["red", "green", "blue"]',
	  sel4: 'var colors = (1:"red", 2:"green", 3:"blue")',
	  correctAnswer: 'var colors = ["red", "green", "blue"]'
	},
	{
	  quest: "Which event occurs when the user clicks on an HTML element?",
	  sel1: 'onmouseclick',
	  sel2: 'onclick',
	  sel3: 'onchange',
	  sel4: 'onmouseover',
	  correctAnswer: 'onclick'
	},
	{
	  quest: "Which sign does jQuery use as a shortcut for jQuery?",
	  sel1: 'the % sign',
	  sel2: 'the ? Sign',
	  sel3: 'the $ sign',
	  sel4: 'the & sign',
	  correctAnswer: 'the $ sign'
	},
	{
	  quest: "What is the correct jQuery code to set the background color of all p elements to red?",
	  sel1: '$("p").layout("background-color","red");',
	  sel2: '$("p").manipulate("background-color","red");',
	  sel3: '$("p").css("background-color","red");',
	  sel4: '$("p").style("background-color","red");',
	  correctAnswer: '$("p").css("background-color","red");'
	},
	{
	  quest: 'With jQuery, look at the following selector: $("div.intro"). What does it select?',
	  sel1: 'The first div element with class="intro"',
	  sel2: 'All div elements with id="intro"',
	  sel3: 'The first div element with id="intro"',
	  sel4: 'All div elements with class="intro"',
	  correctAnswer: 'All div elements with class="intro"'
	},
	{
	  quest: 'Which jQuery method is used to hide selected elements?',
	  sel1: 'display(none)',
	  sel2: 'hidden()',
	  sel3: 'The first div element with id="intro"',
	  sel4: 'hide()',
	  correctAnswer: 'hide()'
	},
	{
	  quest: 'Which jQuery method is used to set one or more style properties for selected elements?',
	  sel1: 'html()',
	  sel2: 'css()',
	  sel3: 'style()',
	  sel4: 'text()',
	  correctAnswer: 'css()'
	},
	{
	  quest: 'What is the correct jQuery code for making all div elements 100 pixels high?',
	  sel1: '$("div").height="100"',
	  sel2: '$("div").height(100)',
	  sel3: '$(“div").yPos(100)',
	  sel4: '$div {height=100px}',
	  correctAnswer: '$("div").height(100)'
	},
	{
	  quest: "Which scripting language is jQuery written in?",
	  sel1: 'JavaScript',
	  sel2: 'C++',
	  sel3: 'C#',
	  sel4: 'VBScript',
	  correctAnswer: 'JavaScript'
	},
	{
	  quest: 'Look at the following selector: $("div p"). What does it select?',
	  sel1: 'All div elements with a p element',
	  sel2: 'The first p element inside a div element',
	  sel3: 'All p elements inside a div element',
	  sel4: 'All p elements outside of a div element',
	  correctAnswer: 'All p elements inside a div element'
	}
];