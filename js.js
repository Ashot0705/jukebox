var audio = document.getElementsByTagName('audio')[0]
var dur = document.getElementById('mduration')
$("dura").click(function() {
	$("dur").html(duration.audio)
})

	$(".playButton").click(function() {
		audio.play();
		audio.duration;
	})
	$(".pauseButton").click(function() {
		audio.pause();
	})

	$(".stopButton").click(function() {
			audio.currentTime = 0;
			audio.pause();
	})