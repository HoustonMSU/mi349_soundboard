var button1Element = document.getElementById('button1')
var button2Element = document.getElementById('button2')
var button3Element = document.getElementById('button3')

var b1Audio = new Audio('blip.wav');
var b2Audio = new Audio('bloop_x.wav');
var b3Audio = new Audio('blurp_x.wav');

button1Element.addEventListener('click', function() {
b1Audio.play();
})

button2Element.addEventListener('click', function() {
b2Audio.play();
})

button3Element.addEventListener('click', function() {
b3Audio.play();
})