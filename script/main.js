 $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

  var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Make Lists"
words[2] = "Rearrange Tabletop"
words[3] = "Call a Friend"
words[4] = "Go for a Walk"
words[5] = "Cut Split Ends"
words[6] = "Meditate"
words[7] = "Sharpen all your Pencils"
words[8] = "Check your Email"
words[9] = "Tidy up your Home"
words[10] = "Wash your Dishes"
words[11] = "Do the Laundry"
words[12] = "Read"
words[13] = "Take a Bath"
words[14] = "Take a Nap"
words[15] = "Doodle"
words[16] = "Make a Meal"
words[17] = "Hoover all the Floors"
words[18] = "Clip your Nails"
words[19] = "Watch a Film"
words[20] = "Take the bin Out"
words[21] = "Make an Origami"
words[22] = "Bake some Cookies"
words[23] = "Fold your Clothes"
words[24] = "Do a Workout"
words[25] = "Play Sudoku"
words[26] = "Water your Plants"
words[27] = "Read the News"
words[28] = "Listen to Podcasts"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}



(function() {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');

    var sketch = document.querySelector('#sketch');
    var sketch_style = getComputedStyle(sketch);
    canvas.width = 1000
    canvas.height = 500

    var mouse = {x: 0, y: 0};
    var last_mouse = {x: 0, y: 0};

    /* Mouse Capturing Work */
    canvas.addEventListener('mousemove', function(e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    }, false);


    /* Drawing on Paint App */
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#C5D2D3';

    canvas.addEventListener('mousedown', function(e) {
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);

    var onPaint = function() {
        ctx.beginPath();
        ctx.moveTo(last_mouse.x, last_mouse.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.closePath();
        ctx.stroke();
    };

}());


var NumberOfstory = 28

var story = new BuildArray(NumberOfstory)

// Use the following variables to 
// define your random story:
story[1] = "Apple"
story[2] = "Car"
story[3] = "Police"
story[4] = "Jacket"
story[5] = "Dog"
story[6] = "Rubbish"
story[7] = "Bread"
story[8] = "Green"
story[9] = "Clouds"
story[10] = "Window"
story[11] = "Armchair"
story[12] = "Towel"
story[13] = "Pillow"
story[14] = "Feather"
story[15] = "Knife"
story[16] = "Burger"
story[17] = "Cold"
story[18] = "Rainbow"
story[19] = "Soft"
story[20] = "Wood"
story[21] = "Lunch"
story[22] = "Bag"
story[23] = "Meal"
story[24] = "Glass"
story[25] = "Bus"
story[26] = "Metallic"
story[27] = "Fluffy"
story[28] = "Door"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomStory(frm) {
// Generate a random number between 1 and NumberOfstory
var rnd = Math.ceil(Math.random() * NumberOfstory)
var rnd2 = Math.ceil(Math.random() * NumberOfstory)
var rnd3 = Math.ceil(Math.random() * NumberOfstory)
while (rnd2 == rnd) {
    rnd2 = Math.ceil(Math.random() * NumberOfstory)
  }
while (rnd2 == rnd3) {
    rnd3 = Math.ceil(Math.random() * NumberOfstory)
  }

// Display the word inside the text box
frm.WordBox.value = story[rnd] + " " + story[rnd2] + " " + story[rnd3];
}


$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});



(function() {
  var canvas = document.querySelector('#paint2');
  var ctx = canvas.getContext('2d');

  var sketch = document.querySelector('#sketch2');
  var sketch_style = getComputedStyle(sketch);
  canvas.width = 1000
  canvas.height = 500

  var mouse = {x: 0, y: 0};
  var last_mouse = {x: 0, y: 0};

  /* Mouse Capturing Work */
  canvas.addEventListener('mousemove', function(e) {
      last_mouse.x = mouse.x;
      last_mouse.y = mouse.y;

      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
  }, false);


  /* Drawing on Paint App */
  ctx.lineWidth = 5;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#C5D2D3';

  canvas.addEventListener('mousedown', function(e) {
      canvas.addEventListener('mousemove', onPaint, false);
  }, false);

  canvas.addEventListener('mouseup', function() {
      canvas.removeEventListener('mousemove', onPaint, false);
  }, false);

  var onPaint = function() {
      ctx.beginPath();
      ctx.moveTo(last_mouse.x, last_mouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();
      ctx.stroke();
  };

}());




//add textbox field
$(document).ready(function(){
	$('#addTextBoxField').click(function(){
		$('#outputForm').append("<li class='fa fa-align-justify'> <textarea class='form item'></textarea></li>");
  });
});

$(function() {
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
  });