// console.log("events.js is linked");
var headerEl = document.getElementById("page-header");		//header AREA
var pageTitleEl = document.getElementById("page-title");	//<h1> element

var keypressInputEl = document.getElementById("keypress-input");  // text input area
var outputTargetEl = document.getElementById("output-target");		// output-target </div>

var guineaPigEl = document.getElementById("guinea-pig");		  // Leave me alone </div>

var addColorButtonEl = document.getElementById("add-color");	// Add color    </button>
var makeLargeEl = document.getElementById("make-large");		  // Hulkify      </button>
var addBorderEl = document.getElementById("add-border");		  // Capture it	  </button>
var addRoundingEl = document.getElementById("add-rounding");  // Rounded      </button>
var buttons = document.getElementsByTagName("button");        // ALL BUTTONS by "TAG NAME" 

var articleSectionEl = document.getElementsByClassName("article-section"); //</section> NOT ARTICLE!!


// 1 When any section is clicked the output target text should be "You clicked on the {text of the section} section"
  // Used NodeList.item() to addEventListener to node (thanks to Brian Doane!)
for (var i = 0; i < articleSectionEl.length; i++) {
  articleSectionEl.item(i).addEventListener("click", (function(event) {
    outputTargetEl.innerHTML = `You clicked on the ${event.target.innerHTML} section`;
    // console.log("Article addEventListener =", `You clicked on the ${event.target.innerHTML} section`);
  }));
}

// 2 When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
pageTitleEl.addEventListener("mouseover", (function(event) {
  outputTargetEl.innerHTML = `You moved your mouse over the header!`;
  // console.log("pageTitleEl on mouseover =", `You moved your mouse over the header!`);
}));

// 3 When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
pageTitleEl.addEventListener("mouseout", (function(event) {
  outputTargetEl.innerHTML = `You left me!`;
  // console.log("pageTitleEl on mouseout =", `You left me!`);
}));

// 4 When you type characters into the input field, the output element should mirror the text in the input field.
keypressInputEl.addEventListener("keyup", (function(event) {
  outputTargetEl.innerHTML = keypressInputEl.value;
  // console.log("on keyup =", keypressInputEl.value);
}));

// 5 When you click the "Add color" button, the guinea-pig element's text color should change to blue.
addColorButtonEl.addEventListener("click", (function(event) {
  guineaPigEl.classList.toggle("blued");
  pageTitleEl.classList.toggle("blued");
  console.log("guineaPigEl.classList color =", guineaPigEl.classList);
}));

// 6 When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
makeLargeEl.addEventListener("click", (function (event) {
  guineaPigEl.classList.toggle("hulkified");
  console.log("guineaPigEl.classList size =",guineaPigEl.classList);
}))





// console.log("Hello Nurse");
// // Assign elements of the DOM to variables
// var outputEl = document.getElementById("output-target");
// var articleSectionEl = document.getElementsByClassName("article-section");
// var titleEl = document.getElementById("page-title");
// var inputEl = document.getElementById("keypress-input");
// var pigText = document.getElementById("guinea-pig");
// var colorButton = document.getElementById("add-color");
// var hulkButton = document.getElementById("make-large");
// var borderButton = document.getElementById("add-border");
// var roundButton = document.getElementById("add-rounding");
// var allButton = document.getElementsByTagName("button");

// 6 When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// function hulkify(event) {
// 	pigText.style.fontSize = '3em';
// }

function hulkify(event) {
	pigText.classList.add('largeFont');
}
hulkButton.addEventListener("click", hulkify);


// // 7 When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// // function addBorder(event) {
// // 	pigText.style.border = '1px solid green';
// // }

// function addBorder(event) {
// 	pigText.classList.add('blueBorder');
// }
// borderButton.addEventListener("click", addBorder);


// // 8 When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// // function roundBorder(event) {
// // 	pigText.style.borderRadius = '10px';
// // }

// function roundBorder(event) {
// 	pigText.classList.add('roundedBorder');
// }

// roundButton.addEventListener("click", roundBorder);


// // 9 The first section's text should be bold.
// articleSectionEl[2].classList.add('goBold');
// // 10 The last section's text should be bold and italicized.
// articleSectionEl[4].classList.add('italicize', 'goBold');
// // 11 Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
// for (var i = 0; i < allButton.length; i++) {
// 	allButton[i].classList.add('blocked');
// }