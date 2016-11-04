// $('.first.circle').circleProgress({
//   value: 0.70,
//   animation: false,
//   fill: {gradient: ['#ff1e41', '#ff5f43']}
// });
$('.first.circle').circleProgress({
  value: 0.8,
  size: 180,
  fill: {gradient: ['#FF5F6D', '#FFC371']}
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Sociability' + '<br>' + '81%');
});

$('.second.circle').circleProgress({
  value: 0.7,
  size: 180
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Initiative' + '<br>' + '73%');
});

$('.third.circle').circleProgress({
  value: 0.8,
  size: 180,
  fill: {gradient: ['#D38312', '#A83279']}
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Educability' + '<br>' + '85%');
});

$('.four.circle').circleProgress({
  value: 0.8,
  size: 180,
  fill: {gradient: ['#FDFC47', '#24FE41']}
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Independence' + '<br>' + '79%');
});

$('.five.circle').circleProgress({
  value: 1,
  size: 180,
  fill: {gradient: ['#ff1e41', '#ff5f43']}
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Ambition' + '<br>' + '110%');
});

$('.six.circle').circleProgress({
  value: 0.7,
  size: 180,
  fill: {gradient: ['#F09819', '#EDDE5D']}
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html('Responsibility' + '<br>' + '74%');
});

///// parseInt(100 * progress)

var canvas = document.getElementById("canvas");
var cont = canvas.getContext("2d");

var data = [ 100, 145, 125, 160, 130 ]; 

cont.fillStyle = "white";
cont.fillRect(10, 20, 580, 370);
cont.fillStyle = "#E04863";
for (var i = 0; i < data.length; i++) {
  var s = data[i];
  cont.fillRect(25 + i * 120, 385 - s * 2, 65, s * 2);
}

cont.fillStyle = "black";
cont.font = "16pt sans-serif";
cont.fillText("Leadership", 45, 130);
cont.fillText("skills", 70, 150);
cont.fillText("Industriousness", 120, 60);
cont.fillText("Organizational ", 230, 90);
cont.fillText("skills", 270, 110);
cont.fillText("Stress", 370, 40);
cont.fillText("resistance", 350, 60);
cont.fillText("attentiveness", 440, 100);