alert("Are Your Ready ?");
var clicks = 0;
var times = 0;
var onoff = 1;

function timers()
{
    onoff = 0;
    $('.clicks').attr('onclick','').unbind('click');
}

function countdown()
{
    times += 1;
    document.getElementById("times").innerHTML = times;
    if (times < 5) 
    {
        dynamicCircle();
        var timer = setTimeout(countdown, 1000);
    }
    else
    {
        alert('Done');
    }
}

function dynamicCircle()
{
  var dylarge =  Math.floor(Math.random() * 1000);
  $('.element').width(dylarge);
  $('.element').height(dylarge);
}

var timer = setTimeout(timers, 6000);
var countd = setTimeout(countdown, 1000);

function onClick() {
    if (onoff) 
    {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    }
};